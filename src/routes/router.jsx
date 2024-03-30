import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../routes/App.jsx";

import Header from "../components/header.jsx";
import BestDealsSection from "../components/best deals section.jsx";

import Homepage from "../routes/homepage.jsx"
import ShopPage from "./shop page.jsx";

import ErrorPage from "./error-page.jsx";

const Router =() => {
    const router = createBrowserRouter([
        {
          path: "/",
          /* this should be the 'root' route, but i just made the header the root
            since its the only element that is being always displayed for now
          */
          element: <Header />,
          errorElement: <ErrorPage />,

          children: [
            {
            path: "page/homepage",
            element: <Homepage />,
            },
            {
                path: "page/shop-page",
                element: <ShopPage />,
            },
          ]
          },
        
      ]);
    
      return <RouterProvider router={router} />;
};
export default Router;