import { createBrowserRouter } from "react-router-dom"
import { Cart } from "./pages/cart"
import App from "./App"
import { Categories } from "./pages/categories"
import { AllCategories } from "./pages/allCategories"
import Products from "./pages/products"
import Wishlist from "./pages/wishlist"

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />
   },
   {
      path: "cart",
      element: <Cart />
   },
   {
      path: 'wishlist',
      element: <Wishlist />
   },
   {
      path: "categories",
      element: <AllCategories />
   },
   {
      path: "categories/electronics",
      element: <Categories cond="electronics" view='ele' />
   },
   {
      path: "categories/mens-outfit",
      element: <Categories cond="men's clothing" view='men' />
   },
   {
      path: "categories/womens-outfit",
      element: <Categories cond="women's clothing" view='wom' />
   },
   {
      path: "categories/jewelry",
      element: <Categories cond='jewelery' view='jew' />
   },
   {
      path: "products/1",
      element: <Products id='1' />
   },
   {
      path: "products/2",
      element: <Products id='2' />
   },
   {
      path: "products/3",
      element: <Products id='3' />
   },
   {
      path: "products/4",
      element: <Products id='4' />
   },
   {
      path: "products/5",
      element: <Products id='5' />
   },
   {
      path: "products/6",
      element: <Products id='6' />
   },
   {
      path: "products/7",
      element: <Products id='7' />
   },
   {
      path: "products/8",
      element: <Products id='8' />
   },
   {
      path: "products/9",
      element: <Products id='9' />
   },
   {
      path: "products/10",
      element: <Products id='10' />
   },
   {
      path: "products/11",
      element: <Products id='11' />
   },
   {
      path: "products/12",
      element: <Products id='12' />
   },
   {
      path: "products/13",
      element: <Products id='13' />
   },
   {
      path: "products/14",
      element: <Products id='14' />
   },
   {
      path: "products/15",
      element: <Products id='15' />
   },
   {
      path: "products/16",
      element: <Products id='16' />
   },
   {
      path: "products/17",
      element: <Products id='17' />
   },
   {
      path: "products/18",
      element: <Products id='18' />
   },
   {
      path: "products/19",
      element: <Products id='19' />
   },
   {
      path: "products/20",
      element: <Products id='20' />
   },
])