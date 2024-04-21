import { cn } from "@helpers/cn";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { Tag } from "./types";
import { CommonTypes } from "@ui/types";

type Props = HTMLAttributes<HTMLDivElement> &
  CommonTypes &
  VariantProps<typeof containerVariants> & {
    as?: Tag;
  };

export function Container(props: Props) {
  const {
    as: Tag = "div",
    inlinePadding,
    height,
    width,
    children,
    className,
  } = props;

  return (
    <Tag
      className={cn(
        containerVariants({ inlinePadding }),
        height,
        width,
        className,
      )}
    >
      {children}
    </Tag>
  );
}

const containerVariants = cva("container mx-auto", {
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
