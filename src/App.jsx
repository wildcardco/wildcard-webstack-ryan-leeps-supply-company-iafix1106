import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutConfirm from "./pages/CheckoutConfirm";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import Brands from "./pages/Brands";
import Offers from "./pages/Offers";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/:categorySlug" element={<Category />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout/confirmation" element={<CheckoutConfirm />} />
            <Route path="contact" element={<Contact />} />
            <Route path="locations" element={<Locations />} />
            <Route path="brands" element={<Brands />} />
            <Route path="offers" element={<Offers />} />
            <Route path="help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
