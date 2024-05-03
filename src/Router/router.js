import {createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop"
import App from "../App";
import Cart from "../pages/Cart";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Shop/>
        },
        {
            path: "/cart",
            element: <Cart/>
        },
      ]
    },
  ]);