import { cn } from "@helpers/cn";
import { ReactNode } from "react";
import { List } from "./list";
import { Item } from "./item";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Navigation(props: Props) {
  const { children, className } = props;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 flex items-center h-16 w-full bg-white shadow",
        className,
      )}
    >
      {children}
    </nav>
  );
}

Navigation.Root = Navigation;
Navigation.List = List;
Navigation.Item = Item;
