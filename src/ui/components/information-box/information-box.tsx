import { cn } from "@helpers/cn";
import { Flex } from "@ui/layout/flex";
import { CommonTypes } from "@ui/types";
import { ReactNode } from "react";

type Props = CommonTypes & {
  children: ReactNode;
  className?: string;
};

export function InformationBox(props: Props) {
  const { width, height, children, className } = props;

  return (
    <Flex
      justify={"center"}
      align={"center"}
      className={cn("w-full h-full", width, height, className)}
    >
      <Flex direction={"column"} align={"center"} gap={"2"}>
        {children}
      </Flex>
    </Flex>
  );
}
