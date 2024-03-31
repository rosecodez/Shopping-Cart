import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Header from "../components/header.jsx";
import Homepage from "../routes/homepage.jsx"
import ShopPage from "./shop page.jsx";
import ErrorPage from "./error-page.jsx";
import CheckoutPage from "./checkout-page.jsx";

const Router = () => {
  const [cartTotal, setCartTotal] = useState(0);
    const router = createBrowserRouter([
        {
          path: "/",
          /* this should be the 'root' route, but i just made the header the root
            since its the only element that is being always displayed for now
          */
          element: <Header cartTotal={cartTotal}/>,
          errorElement: <ErrorPage />,

          children: [
            {
              path: "page/homepage",
              element: <Homepage setCartTotal={setCartTotal} />,
            },
            {
              path: "page/shop-page",
              element: <ShopPage setCartTotal={setCartTotal} />,
            },
            {
              path: "page/checkout-page",
              element: <CheckoutPage />,
            },
        ],
        },
        
      ]);
    
      return <RouterProvider router={router} />;
};
export default Router;