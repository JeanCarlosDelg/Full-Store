import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductProvider } from "./Context/ProductPro.tsx";
import Layout from "./layouts/Layout.tsx";
import NoLayout from "./layouts/NoLayout.tsx";
import NotFound from "./pages/NotFound.tsx";
import Cart from "./pages/Cart.tsx";
import LoveProducts from "./pages/LoveProducts.tsx";
import MyProfile from "./pages/MyProfile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/love-products",
        element: <LoveProducts />
      },
      {
        path: "/my-profile",
        element: <MyProfile />
      },
      // {
      //   path: "/",
      //   element: <App />
      // },
    ]
  },
  {
    path: "/",
    element: <NoLayout />,
    children: [
      {
        path: "/notfound",
        element: <NotFound />
      },
      // {
      //   path: "/",
      //   element: <App />
      // },
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>
);
