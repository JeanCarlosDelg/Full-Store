// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout.tsx"
import NotFound from "./pages/NotFound.tsx";
import Cart from "./pages/cart/Cart.tsx";
import LoveProducts from "./pages/loveProducts/LoveProducts.tsx";
import MyProfile from "./pages/MyProfile.tsx";
import CategoryDetail from "./pages/categories/CategoryDetail.tsx";
import Products from "./pages/products/Products.tsx";
import PaypalSuccess from "./pages/paypal/PaypalSuccess.tsx";
import PaypalCancel from "./pages/paypal/PaypalCancel.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "love-products",
        element: <LoveProducts />
      },
      {
        path: "my-profile",
        element: <MyProfile />
      },
      {
        path: "category/:slug",
        element: <CategoryDetail />
      },
      {
        path: "product/:slug",
        element: <Products/>
      },
      {
        path: "success",
        element: <PaypalSuccess />
      },
      {
        path: "cancel",
        element: <PaypalCancel />
      },
      {
        path: "404",
        element: <NotFound />
      },
      {
        path: "*",
        element: <Navigate to={"/404"} replace />
      }
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
      <RouterProvider router={router} />
  // </StrictMode>
);
