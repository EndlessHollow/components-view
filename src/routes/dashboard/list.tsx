import { useRootStore } from "@hooks/use-root-store";
import { observer } from "mobx-react-lite";
import { Divider } from "@ui/components/divider";
import { Item } from "./item";
import { FolderX, ServerCrash } from "lucide-react";
import { Text } from "@ui/typography/text";
import { InformationBox } from "@ui/components/information-box";

function _List() {
  const store = useRootStore();

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
    <ul>
      {store.filteredApplications.map((app, index) => {
        if (index === store.filteredApplications.length - 1) {
          return <Item key={`${app.id}-${app.type}`} application={app} />;
        }

        return (
          <>
            <Item key={`${app.id}-${app.type}`} application={app} />
            <Divider />
          </>
        );
      })}
    </ul>
  );
}

export const List = observer(_List);
