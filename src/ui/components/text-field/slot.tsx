import { cn } from "@helpers/cn";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export function Slot(props: Props) {
  const { children, className } = props;

  return (
    <div className={cn("absolute translate-x-2", className)}>{children}</div>
  );
}
