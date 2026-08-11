import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Any from "./pages/Any";
import Home from "./pages/Home";

function ErrorPage() {
  return <div>Ops, página não encontrada!</div>;
}
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Home /> },
        { path: "any", element: <Any /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
