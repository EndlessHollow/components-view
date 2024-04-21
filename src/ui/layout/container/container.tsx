import { cn } from "@helpers/cn";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { CommonTypes } from "../types";

type Props = HTMLAttributes<HTMLDivElement> &
  CommonTypes &
  VariantProps<typeof containerProps>;

export function Container(props: Props) {
  const { inlinePadding, children, className } = props;

  return (
    <div className={cn(containerProps({ inlinePadding, className }))}>
      {children}
    </div>
  );
}

const containerProps = cva("container mx-auto", {
  variants: {
    inlinePadding: {
      "1": "px-1",
      "2": "px-2",
      "3": "px-3",
      "4": "px-4",
      "5": "px-5",
      "6": "px-6",
      "7": "px-7",
      "8": "px-8",
    },
  },
  defaultVariants: {
    inlinePadding: "4",
  },
});
