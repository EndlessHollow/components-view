import { Logo } from "@assets/logo";
import { Navigation } from "@ui/components/navigation";
import { Container } from "@ui/layout/container";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Navigation.Root>
        <Container>
          <Navigation.List>
            <Navigation.Item>
              <Link to="/">
                <Logo />
              </Link>
            </Navigation.Item>
          </Navigation.List>
        </Container>
      </Navigation.Root>
      <Container
        as={"main"}
        height="h-[calc(100vh-96px)]"
        className="mt-16 py-8"
      >
        <Outlet />
      </Container>
    </>
  );
}
