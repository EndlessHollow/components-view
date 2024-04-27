import { cn } from "@helpers/cn";
import { Slot } from "./slot";
import { ReactNode } from "react";

type Props = {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  children: ReactNode;
  className?: string;
};

export function TextField(props: Props) {
  const { label, placeholder, onChange, children, className } = props;

  return (
    <div className="relative flex items-center">
      {children}
      <input
        aria-label={label}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
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
