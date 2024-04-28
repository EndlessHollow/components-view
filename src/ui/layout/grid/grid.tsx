import { HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@helpers/cn";
import { createVectorValues } from "./create-vector-values";
import { CommonTypes } from "@ui/types";
import { alignTokens, gapTokens, justifyTokens } from "../tokens";

type Props = HTMLAttributes<HTMLDivElement> &
  CommonTypes &
  VariantProps<typeof gridVariants>;

export function Grid(props: Props) {
  const {
    children,
    className,
    width,
    height,
    display,
    rows,
    columns,
    flow,
    justify,
    align,
    gap,
  } = props;

  return (
    <div
      className={cn(
        gridVariants({
          display,
          rows,
          columns,
          flow,
          justify,
          align,
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

const gridVariants = cva(null, {
  variants: {
    display: {
      grid: "grid",
      "inline-grid": "inline-grid",
    },
    rows: createVectorValues("rows"),
    columns: createVectorValues("cols"),
    flow: {
      row: "grid-flow-row",
      column: "grid-flow-col",
      dense: "grid-flow-dense",
      "row-dense": "grid-flow-row-dense",
      "column-dense": "grid-flow-col-dense",
    },
    justify: justifyTokens,
    align: alignTokens,
    gap: gapTokens,
  },
  defaultVariants: {
    display: "grid",
  },
});
