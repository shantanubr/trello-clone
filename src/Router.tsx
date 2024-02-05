import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
