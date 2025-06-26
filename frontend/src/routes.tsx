import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Any from "./pages/Any";
import Home from "./pages/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "any", element: <Any /> },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
