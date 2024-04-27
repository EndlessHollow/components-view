import { useLoaderData } from "react-router-dom";

export function ApplicationDetail() {
  const appDetail = useLoaderData();

  console.log("appDetail", appDetail);

  return <div>Detail Page</div>;
}
