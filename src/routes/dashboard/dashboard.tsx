import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@hooks/use-root-store";
import { Container } from "@ui/layout/container";
import { Grid } from "@ui/layout/grid";
import { Card } from "@ui/components/card";
import { Heading } from "@ui/typography/heading";
import { Panel } from "./panel";
import { List } from "./list/list";

function _Dashboard() {
  const store = useRootStore();

  useEffect(() => {
    store.fetchApplications();
  }, []);

  return (
    <Grid gap={"6"} height="h-full" className="grid-rows-[min-content,1fr]">
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

export const Dashboard = observer(_Dashboard);
