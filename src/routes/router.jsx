import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from '../App.jsx';
import BestDealsSection from "../components/best deals section.jsx";

import Homepage from "../routes/homepage.jsx"
import ShopPage from "./shop page.jsx";

import ErrorPage from "./error-page.jsx";

const Router =() => {
    const router = createBrowserRouter([
        {path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "homepage"
    }
    ]);
    
    return <RouterProvider router={router} />;
}