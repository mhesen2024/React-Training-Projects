import { createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Cart from "./featuers/cart/Cart.jsx";
import Order , {loader as orderloader} from "./featuers/order/Order.jsx";
import Menu,{loader as menuLoader } from "./featuers/menu/Menu.jsx";
import Error from "./ui/Error.jsx";
import CreateOrder from "./featuers/order/CreateOrder.jsx";
// import OrderItem from "./featuers/order/OrderItem.jsx";
import Applayout from "./ui/Applayout.jsx";

const router = createBrowserRouter([
{
  path: "/",
  element: <Applayout />,
  errorElement: <Error />,
  children: [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/menu",
    element: <Menu />,
    loader:menuLoader,
    errorElement: <Error />,
    
  },
  {
    path: "order/new",
    element: <CreateOrder />,
  },
  {
    path: "order",
    element: <Order />,
    loader : orderloader,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },]}
]);

export default router;
