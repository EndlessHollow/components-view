import { cn } from "@helpers/cn";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function List(props: Props) {
  const { children, className } = props;

  return <ul className={cn("", className)}>{children}</ul>;
}
