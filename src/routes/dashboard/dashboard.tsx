import { Suspense, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@hooks/use-root-store";
import { Navigation } from "@ui/components/navigation";
import { Container } from "@ui/layout/container";
import { Logo } from "@assets/logo";
import { Grid } from "@ui/layout/grid";
import { Card } from "@ui/components/card";
import { Heading } from "@ui/typography/heading";
import { Panel } from "./panel";
import { List } from "./list";

function _Dashboard() {
  const store = useRootStore();

  useEffect(() => {
    store.fetchApplications();
  }, []);

  return (
    <>
      <Navigation.Root>
        <Container>
          <Navigation.List>
            <Navigation.Item>
              <Logo />
            </Navigation.Item>
          </Navigation.List>
        </Container>
      </Navigation.Root>
      <Container
        as={"main"}
        height="h-[calc(100vh-96px)]"
        className="mt-16 py-8"
      >
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
      </Container>
    </>
  );
}

export const Dashboard = observer(_Dashboard);
