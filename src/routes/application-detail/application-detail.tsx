import { BackButton } from "@ui/components/back-button/back-button";
import { Card } from "@ui/components/card";
import { Image } from "@ui/components/image";
import { Grid } from "@ui/layout/grid";
import { Text } from "@ui/typography/text";
import { Heading } from "@ui/typography/heading";
import { useLoaderData } from "react-router-dom";
import { TApplicationDetail } from "@helpers/types";
import { Flex } from "@ui/layout/flex";
import Markdown from "react-markdown";
import { InformationBox } from "./information-box";
import { Boxes, Package, Rocket } from "lucide-react";

const ICON_SIZE = 24;
const ICON_COLOR = "text-gray-800";

export function ApplicationDetail() {
  const appDetail = useLoaderData() as TApplicationDetail;

  console.log(appDetail);

  return (
    <Grid gap={"6"}>
      <Grid gap={"4"}>
        <BackButton />
        <Heading>Application Detail</Heading>
      </Grid>
      <Card>
        <Grid>
          <Flex gap={"4"}>
            <Image
              src={appDetail.icon["128"] || appDetail.icon["64"]}
              alt="`image - ${appDetail.name}`"
            />
            <Grid>
              <Heading type="h2">{appDetail.name}</Heading>
              <Text>{appDetail.shortDescription}</Text>
            </Grid>
          </Flex>
          <Markdown>{appDetail.longDescription}</Markdown>
        </Grid>
      </Card>
      <Grid columns={"12"} gap={"4"}>
        <InformationBox
          heading={"Category"}
          icon={<Boxes size={ICON_SIZE} className={ICON_COLOR} />}
          text={appDetail.category}
        />
        <InformationBox
          heading={"Type"}
          icon={<Package size={ICON_SIZE} className={ICON_COLOR} />}
          text={appDetail.type}
        />
        <InformationBox
          heading={"Version"}
          icon={<Rocket size={ICON_SIZE} className={ICON_COLOR} />}
          text={appDetail.version}
        />
      </Grid>
    </Grid>
  );
}
