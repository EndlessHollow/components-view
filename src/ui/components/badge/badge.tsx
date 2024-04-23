import { cn } from "@helpers/cn";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge(props: Props) {
  const { variant, radius, className, children } = props;

  return (
    <span className={cn(badgeVariants({ variant, radius, className }))}>
      {children}
    </span>
  );
}

const badgeVariants = cva(
  "flex justify-center items-center h-5 text-white text-xs px-2 font-medium",
  {
    variants: {
      variant: {
        neutral: "bg-slate-400",
      },
      radius: {
        none: "rounded-none",
        rounded: "rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "neutral",
      radius: "none",
    },
  },
);
