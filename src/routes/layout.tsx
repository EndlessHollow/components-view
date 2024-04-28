import { Logo } from "@assets/logo";
import { Navigation } from "@ui/components/navigation";
import { Spinner } from "@ui/components/spinner";
import { Container } from "@ui/layout/container";
import { Link, Outlet, useNavigation } from "react-router-dom";

export function Layout() {
  const navigation = useNavigation();

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
        {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      </Container>
    </>
  );
}
