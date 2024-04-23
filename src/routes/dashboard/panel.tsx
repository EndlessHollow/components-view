import { TextField } from "@ui/components/text-field/text-field";
import { Flex } from "@ui/layout/flex";
import { Search } from "lucide-react";
import { Heading } from "@ui/typography/heading";
import { observer } from "mobx-react-lite";

function _Panel() {
  return (
    <Flex direction={"column"} gap={"4"}>
      <Heading type={"h3"}>Applications</Heading>
      <TextField.Root label="search" placeholder="search">
        <TextField.Slot>
          <Search width={20} className="text-slate-400" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
}

export const Panel = observer(_Panel);
