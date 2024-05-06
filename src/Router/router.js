import {createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop"
import App from "../App";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";



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
        {
          path: "/checkout",
          element: <Checkout/>
      },
      ]
    },
  ]);