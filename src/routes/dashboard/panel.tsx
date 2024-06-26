import { TextField } from "@ui/components/text-field/text-field";
import { Flex } from "@ui/layout/flex";
import { Search } from "lucide-react";
import { Heading } from "@ui/typography/heading";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@hooks/use-root-store";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function _Panel() {
  const store = useRootStore();

  const [value, setValue] = useState(store.searchQuery);

  const handleSearch = useDebouncedCallback((query: string) => {
    store.search(query);
  }, 500);

  function handleOnChange(query: string) {
    setValue(query);
    handleSearch(query);
  }

  return (
    <Flex direction={"column"} gap={"4"}>
      <Heading type={"h3"}>Applications</Heading>
      <TextField.Root
        label="search"
        placeholder="search"
        value={value}
        onChange={handleOnChange}
      >
        <TextField.Slot>
          <Search width={20} className="text-slate-400" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
}

export const Panel = observer(_Panel);
