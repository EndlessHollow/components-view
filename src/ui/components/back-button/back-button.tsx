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
    <Link to={"/"}>
      <ChevronLeft />
      <Text>{label} || Back</Text>
    </Link>
  );
}
