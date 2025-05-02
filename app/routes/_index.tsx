import type { Route } from "./+types/_index";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1>Index Route</h1>
      <Link to="/page">Click to go to /page</Link>
    </>
  );
}
