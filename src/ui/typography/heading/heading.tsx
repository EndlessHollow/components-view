import { cn } from "@helpers/cn";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { TTag } from "./types";

type Props = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: TTag;
  };

export function Heading(props: Props) {
  const { as: Tag = "h1", type, className, children } = props;

  return (
    <Tag className={cn(headingVariants({ type, className }))}>{children}</Tag>
  );
}

const headingVariants = cva(null, {
  variants: {
    type: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-medium",
    },
  },
});
