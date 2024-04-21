import { cn } from "@helpers/cn";
import { HTMLAttributes } from "react";
import { Slot } from "./slot";

type Props = HTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder: string;
};

export function TextField(props: Props) {
  const { label, placeholder, children, className } = props;

  return (
    <div className="relative flex items-center">
      {children}
      <input
        aria-label={label}
        placeholder={placeholder}
        className={cn(
          "w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-600 ring-slate-100",
          { "pl-9": children },
          className,
        )}
      />
    </div>
  );
}

TextField.Root = TextField;
TextField.Slot = Slot;
