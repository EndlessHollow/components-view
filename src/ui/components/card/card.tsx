import { cn } from "@helpers/cn";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Card(props: Props) {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "flex p-8 rounded-2xl bg-white shadow transition-all",
        className,
      )}
    >
      {children}
    </div>
  );
}
