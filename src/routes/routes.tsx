import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./error-page";
import { Dashboard } from "./dashboard";
import { ApplicationDetailLoader } from "@routes/application-detail";
import { Layout } from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        element: <Dashboard />,
        index: true,
      },
      {
        path: "/application-detail/:id",
        loader: ApplicationDetailLoader,
        lazy: async () => {
          const { ApplicationDetail } = await import(
            "@routes/application-detail"
          );
          return { Component: ApplicationDetail };
        },
      },
    ],
  },
]);
