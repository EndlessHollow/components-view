import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./homepage";
import { ErrorPage } from "./error-page";
import { ApplicationDetail } from "./application-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "application-detail/:id",
    element: <ApplicationDetail />,
    errorElement: <ErrorPage />,
  },
]);
