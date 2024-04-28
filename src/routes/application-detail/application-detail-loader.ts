import { LoaderFunctionArgs } from "react-router-dom";

export async function applicationDetailLoader(props: LoaderFunctionArgs) {
  const { params } = props;

  const res = await fetch(`https://apps-api.keboola.com/apps/${params.id}`);

  if (res.status !== 200) {
    throw new Response("Could not fetch applications.", { status: 404 });
  } else {
    const appDetail = await res.json();
    return appDetail;
  }
}
