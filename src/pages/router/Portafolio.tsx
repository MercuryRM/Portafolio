import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

export default function Portafolio() {
  return <RouterProvider router={appRouter} />;
}
