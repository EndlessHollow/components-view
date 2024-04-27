import { TApplication } from "@helpers/types";
import { Flex } from "@ui/layout/flex";
import { Grid } from "@ui/layout/grid";
import { Heading } from "@ui/typography/heading";
import { Image } from "@ui/components/image";
import { Text } from "@ui/typography/text";
import { Badge } from "@ui/components/badge";
import { useEffect, useRef } from "react";
import { TDimensions } from "@hooks/use-window-resize";
import { Link } from "react-router-dom";

type Props = {
  application: TApplication;
  windowSize: TDimensions;
  index: number;
  setSize: (index: number, size: number) => void;
};

export function Item(props: Props) {
  const { application, windowSize, index, setSize } = props;

  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const size = itemRef.current?.getBoundingClientRect().height || 0;
    setSize(index, size);
  }, [setSize, index, windowSize]);

  return (
    <li className="py-3" ref={itemRef}>
      <Link
        to={`application-detail/${application.id}`}
        className="flex items-center gap-3"
      >
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
      </Link>
    </li>
  );
}
