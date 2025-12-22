import MainLayout from "@/layouts/main";
import HomePage from "@/pages/home";
import VendorsPage from "@/pages/vendors";
import { createBrowserRouter, type RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "vendors", element: <VendorsPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
