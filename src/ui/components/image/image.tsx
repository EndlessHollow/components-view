import { cn } from "@helpers/cn";
import { CommonTypes } from "@ui/types";
import { HTMLAttributes } from "react";
import { Image as Icon } from "lucide-react";

type TLoading = "eager" | "lazy";

type Props = HTMLAttributes<HTMLImageElement> &
  CommonTypes & {
    src: string;
    alt: string;
    loading?: TLoading;
  };

export function Image(props: Props) {
  const { src, alt, loading = "lazy", height, width, className } = props;

  if (!src) {
    return <Icon width={48} height={48} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={cn("w-12 h-12", height, width, className)}
    />
  );
}
