import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { RootStoreProvider } from "@hooks/use-root-store";
import { router } from "@routes/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootStoreProvider>
      <RouterProvider router={router} />
    </RootStoreProvider>
  </React.StrictMode>,
);
