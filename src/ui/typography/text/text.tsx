import { cn } from "@helpers/cn";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { fontWeightTokens, textAlignmentTokens } from "../tokens";
import { TTag } from "./types";

type Props = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants> & {
    as?: TTag;
  };

export function Text(props: Props) {
  const { as: Tag = "p", size, weight, color, className, children } = props;

  return (
    <Tag className={cn(textVariants({ size, weight, color, className }))}>
      {children}
    </Tag>
  );
}

const textVariants = cva(null, {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
    },
    weight: fontWeightTokens,
    color: {
      primary: "text-slate-600",
      secondary: "text-slate-500",
    },
    align: textAlignmentTokens,
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    color: "primary",
    align: "left",
  },
});
