import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@helpers/cn";
import { CommonTypes } from "@ui/types";
import { commonProperties } from "@ui/common-properties";

type Props = HTMLAttributes<HTMLDivElement> &
  CommonTypes &
  VariantProps<typeof flexVariants>;

export function Flex(props: Props) {
  const {
    children,
    className,
    height,
    width,
    display,
    direction,
    justify,
    align,
    wrap,
    gap,
  } = props;

  return (
    <div
      className={cn(
        flexVariants({
          display,
          direction,
          justify,
          align,
          wrap,
          gap,
        }),
        width,
        height,
        className,
      )}
    >
      {children}
    </div>
  );
}

const flexVariants = cva(null, {
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
