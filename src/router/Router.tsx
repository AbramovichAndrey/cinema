import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "../components/pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<HomePage />} />
    </>
  )
);
const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
