import { RouterProvider } from "react-router";
import ReactQueryProvider from "./providers/reactQuery";
import { router } from "./router";

export default function App() {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  );
}
