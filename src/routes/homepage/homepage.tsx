import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@hooks/use-root-store";

function _Homepage() {
  const store = useRootStore();

  useEffect(() => {
    store.fetchApplications();
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}

export const Homepage = observer(_Homepage);
