import { cn } from "@helpers/cn";
import { CommonTypes } from "@ui/types";
import { VariantProps, cva } from "class-variance-authority";

type Props = CommonTypes &
  VariantProps<typeof skeletonVariant> & {
    className?: string;
  };

export function Skeleton(props: Props) {
  const { type, width, height, className } = props;

  return (
    <div
      className={cn(skeletonVariant({ type }), width, height, className)}
    ></div>
  );
}

const skeletonVariant = cva(
  "w-32 h-32 flex items-center justify-center bg-gray-100 animate-pulse",
  {
    variants: {
      type: {
        rounded: "rounded-2xl",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      type: "rounded",
    },
  },
);
