import { Grid } from "@ui/layout/grid";
import { Card } from "@ui/components/card";
import { Heading } from "@ui/typography/heading";
import { Panel } from "./panel";
import { List } from "./list/list";

export function Dashboard() {
  return (
    <Grid
      gap={"6"}
      height="h-[calc(100vh-128px)]"
      className="grid-rows-[min-content,1fr]"
    >
      <Heading type={"h1"}>Dashboard</Heading>
      <Card className="overflow-hidden">
        <Grid
          gap={"4"}
          className="grid-rows-[min-content,1fr]"
          width={"w-full"}
        >
          <Panel />
          <List />
        </Grid>
      </Card>
    </Grid>
  );
}
