import { cn } from "@helpers/cn";
import { CommonTypes } from "@ui/types";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export function Slot(props: Props) {
  const { children, className } = props;

  return (
    <div className={cn("absolute translate-x-2", className)}>{children}</div>
  );
}
