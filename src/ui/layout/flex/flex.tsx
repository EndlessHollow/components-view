import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { CommonTypes } from "../types";
import { cn } from "@helpers/cn";
import { commonProperties } from "../common-properties";

type Props = HTMLAttributes<HTMLDivElement> &
  CommonTypes &
  VariantProps<typeof flexProperties>;

export function Flex(props: Props) {
  const { children, className, display, direction, justify, align, wrap, gap } =
    props;

  return (
    <div
      className={cn(
        flexProperties({
          display,
          direction,
          justify,
          align,
          wrap,
          gap,
          className,
        }),
      )}
    >
      {children}
    </div>
  );
}

const flexProperties = cva(null, {
  variants: {
    display: {
      flex: "flex",
      "inline-flex": "inline-flex",
    },
    direction: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
    wrap: {
      "no-wrap": "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
    ...commonProperties,
  },
  defaultVariants: {
    display: "flex",
  },
});
