import { createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Cart from "./featuers/cart/Cart.jsx";
import Order , {loader as orderloader} from "./featuers/order/Order.jsx";
import Menu,{loader as menuLoader } from "./featuers/menu/Menu.jsx";
import Error from "./ui/Error.jsx";
import CreateOrder, { action as actionOrder } from "./featuers/order/CreateOrder.jsx";
import { action as updateOrderAction } from "./featuers/order/UpdateOrder.jsx";
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
    action: actionOrder,
  },
  {
    path: "order/:id",
    element: <Order />,
    loader : orderloader,
    action: updateOrderAction,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },]}
]);

export default router;
