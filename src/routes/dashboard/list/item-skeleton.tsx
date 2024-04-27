import { Skeleton } from "@ui/components/skeleton";
import { Flex } from "@ui/layout/flex";
import { Grid } from "@ui/layout/grid";

export function ItemSkeleton() {
  return (
    <li className="py-3">
      <Flex align={"center"} gap={"3"}>
        <Skeleton width="w-12" height="h-12" />
        <Grid gap={"1"}>
          <Flex gap={"2"} align={"center"}>
            <Skeleton width="w-32" height="h-4" />
          </Flex>
          <Skeleton width="w-64" height="h-4" />
        </Grid>
      </Flex>
    </li>
  );
}
