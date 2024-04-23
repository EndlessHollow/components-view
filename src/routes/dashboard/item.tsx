import { TApplication } from "@helpers/types";
import { Flex } from "@ui/layout/flex";
import { Grid } from "@ui/layout/grid";
import { Heading } from "@ui/typography/heading";
import { Image } from "@ui/components/image";
import { Text } from "@ui/typography/text";
import { Badge } from "@ui/components/badge";

type Props = {
  application: TApplication;
};

export function Item(props: Props) {
  const { application } = props;

  return (
    <li className="py-3">
      <Flex align={"start"} gap={"3"}>
        <Image
          src={application.icon["64"] || application.icon["128"]}
          alt={`image - ${application.name}`}
        />
        <Grid>
          <Flex gap={"2"} align={"center"}>
            <Heading as="h4" type={"h4"}>
              {application.name}
            </Heading>
            <Badge radius={"rounded"}>{application.type}</Badge>
          </Flex>
          <Text color="secondary">{application.shortDescription}</Text>
        </Grid>
      </Flex>
    </li>
  );
}
