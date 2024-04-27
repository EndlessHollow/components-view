import React from "react";
import ReactDOM from "react-dom/client";
import { Link, RouterProvider } from "react-router-dom";
import "./index.css";
import { RootStoreProvider } from "@hooks/use-root-store";
import { router } from "@routes/routes";
import { Container } from "@ui/layout/container";
import { Logo } from "@assets/logo";
import { Navigation } from "@ui/components/navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootStoreProvider>
      <RouterProvider router={router} />
    </RootStoreProvider>
  </React.StrictMode>,
);
