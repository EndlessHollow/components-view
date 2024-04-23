import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./error-page";
import { ApplicationDetail } from "./application-detail";
import { Dashboard } from "./dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "application-detail/:id",
    element: <ApplicationDetail />,
    errorElement: <ErrorPage />,
  },
]);
