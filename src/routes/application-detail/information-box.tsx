import { Card } from "@ui/components/card";
import { Flex } from "@ui/layout/flex";
import { Text } from "@ui/typography/text";
import { Heading } from "@ui/typography/heading";
import { ReactNode } from "react";

type Props = {
  heading: string;
  icon: ReactNode;
  text: string | string[];
};

export function InformationBox(props: Props) {
  const { heading, icon, text } = props;

  function renderInformation() {
    if (!text) {
      return <Text className="text-2xl">unknown</Text>;
    }

    if (Array.isArray(text)) {
      if (!text.length) {
        return <Text className="text-2xl">unknown</Text>;
      }

      return (
        <Flex direction={"column"} justify={"center"} align={"center"}>
          {text.map((item, idx) => (
            <Text key={`${item}-${idx}`} className="text-2xl">
              {item}
            </Text>
          ))}
        </Flex>
      );
    }

    return <Text className="text-2xl">{text}</Text>;
  }

  return (
    <Card className="col-span-12 sm:col-span-4">
      <Flex direction={"column"} align={"center"} width="w-full" gap={"6"}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={"2"}
        >
          <Heading as="h4" type={"h4"}>
            {heading}
          </Heading>
          {icon}
        </Flex>
        {renderInformation()}
      </Flex>
    </Card>
  );
}
