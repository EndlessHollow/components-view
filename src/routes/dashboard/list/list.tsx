import { useRootStore } from "@hooks/use-root-store";
import { observer } from "mobx-react-lite";
import { Divider } from "@ui/components/divider";
import { Item } from "./item";
import { FolderX, ServerCrash } from "lucide-react";
import { Text } from "@ui/typography/text";
import { InformationBox } from "@ui/components/information-box";
import {
  ListChildComponentProps,
  VariableSizeList,
  VariableSizeList as VirtualizedList,
} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useCallback, useRef } from "react";
import { useWindowResize } from "@hooks/use-window-resize";
import { ItemSkeleton } from "./item-skeleton";
import { ListSkeleton } from "./list-skeleton";

type TSizeMap = { [index: number]: number };

const INITIAL_SIZE = 74;

function _List() {
  const store = useRootStore();

  const listRef = useRef<VariableSizeList>(null);
  const sizeMap = useRef<TSizeMap>({});

  const dimensions = useWindowResize();

  const setSize = useCallback((index: number, size: number) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
    listRef.current?.resetAfterIndex(index);
  }, []);

  function getSize(index: number) {
    return sizeMap.current[index] || INITIAL_SIZE;
  }

  if (store.loading) {
    return <ListSkeleton count={7} />;
  }

  if (!store.filteredApplications) {
    return (
      <InformationBox>
        <FolderX className="h-7 w-7 text-slate-500" />
        <Text color={"secondary"}>No data</Text>
      </InformationBox>
    );
  }

  if (store.error) {
    return (
      <InformationBox>
        <ServerCrash className="h-7 w-7 text-slate-500" />
        <Text color={"secondary"}>Could not fetch data</Text>
      </InformationBox>
    );
  }

  return (
    <div>
      <AutoSizer>
        {({ height, width }) => (
          <VirtualizedList
            ref={listRef}
            innerElementType="ul"
            itemData={store.filteredApplications}
            itemCount={store.filteredApplications.length}
            itemSize={getSize}
            height={height}
            width={width}
            useIsScrolling={true}
          >
            {(props: ListChildComponentProps) => {
              if (props.isScrolling) {
                return (
                  <div style={props.style}>
                    <ItemSkeleton />
                  </div>
                );
              }
              return (
                <div style={props.style}>
                  <Item
                    key={`${props.data[props.index].id}-${props.data[props.index].type}`}
                    application={props.data[props.index]}
                    windowSize={dimensions}
                    index={props.index}
                    setSize={setSize}
                  />
                  <Divider />
                </div>
              );
            }}
          </VirtualizedList>
        )}
      </AutoSizer>
    </div>
  );
}

export const List = observer(_List);
