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
              <Link to="/" className="inline-block">
                <Logo />
              </Link>
            </Navigation.Item>
          </Navigation.List>
        </Container>
      </Navigation.Root>
      <Container as={"main"} height="h-full" className="mt-16 py-8">
        <Outlet />
      </Container>
    </>
  );
}
