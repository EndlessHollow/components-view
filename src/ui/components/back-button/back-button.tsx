import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Text } from "@ui/typography/text";

type Props = {
  label?: string;
  to?: string;
};

export function BackButton(props: Props) {
  const { label, to } = props;

  return (
    <Link to={to || "/"} className="inline-flex items-center w-fit group">
      <ChevronLeft
        size={"20"}
        className="text-slate-600 group-hover:text-slate-500 transition-all"
      />
      <Text className="group-hover:text-slate-500 transition-all">
        {label || "Back"}
      </Text>
    </Link>
  );
}
