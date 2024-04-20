import { RootStore } from "@stores/root-store";
import { ReactNode, createContext, useContext } from "react";

type Props = {
  children: ReactNode;
};

const Ctx = createContext<RootStore | undefined>(undefined);

export function RootStoreProvider(props: Props) {
  const { children } = props;

  const rootStore = new RootStore();

  return <Ctx.Provider value={rootStore}>{children}</Ctx.Provider>;
}

export function useRootStore() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("Used outside of Root Store");
  }

  return ctx;
}
