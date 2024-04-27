import { Button } from "@ui/components/button";
import { Container } from "@ui/layout/container";
import { Flex } from "@ui/layout/flex";
import { Heading } from "@ui/typography/heading";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  function renderError() {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return <Heading type={"h2"}>This page doesn't exist!</Heading>;
      }

      if (error.status === 401) {
        return <Heading type={"h2"}>You aren't authorized to see this</Heading>;
      }

      if (error.status === 503) {
        return <Heading type={"h2"}>Looks like our API is down</Heading>;
      }

      if (error.status === 418) {
        return <Heading type={"h2"}>🫖</Heading>;
      }
    }

    return <div>Something went wrong</div>;
  }

  return (
    <Container as={"main"} height="h-[calc(100vh-96px)]" className="mt-16 py-8">
      <Flex
        height="h-full"
        direction={"column"}
        justify={"center"}
        align={"center"}
        gap={"4"}
      >
        {renderError()}
        <Button>
          <Link to="/">Back to homepage</Link>
        </Button>
      </Flex>
    </Container>
  );
}
