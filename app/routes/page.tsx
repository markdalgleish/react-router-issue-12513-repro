import type { Route } from "./+types/page";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Sign Up" }];
};

export default function SignUpRoute() {
  return (
    <>
      <h1>Page</h1>
      <ol>
        <li>
          Make a change to the <pre>app/styles.css</pre> file to trigger HMR for
          CSS
        </li>
        <li>
          Then click <Link to="/">this link</Link> to navigate back to the index
          page which should trigger the error
        </li>
      </ol>
    </>
  );
}
