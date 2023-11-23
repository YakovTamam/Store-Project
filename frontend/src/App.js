import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import AboveHeader from "./components/AboveHeader";
import UnderFooter from "./components/UnderFooter";
import Waze from "./components/Waze";
import WA from "./components/WA";
import Social from "./sections/Social";
import ButtomNavigation from "./sections/ButtomNavigation";

function HeaderWithLocation({ excludeRoutes }) {
  const location = useLocation();
  const shouldShowHeader = !excludeRoutes.some((route) =>
    location.pathname.includes(route)
  );

  return <>{shouldShowHeader && <Header />}</>;
}

function App() {
  const excludeHeaderRoutes = ["/cart"];

  return (
    <div className="App">
      <Router>
        <AboveHeader />
        <HeaderWithLocation excludeRoutes={excludeHeaderRoutes} />
        <main>
          <Routes>
            <Route path="/order" element={<OrderScreen />}>
              <Route path="/order/:id" element={<OrderScreen />} />
            </Route>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route path="/admin/orderslist" element={<OrderListScreen />} />
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductListScreen />}
            />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />
            <Route path="/cart/" element={<CartScreen />}>
              <Route path="/cart/:id" element={<CartScreen />} />
            </Route>
            <Route path="/search/:keyword" element={<HomeScreen />}>
              <Route
                path="/search/:keyword/page/:pageNumber"
                element={<HomeScreen />}
              />
            </Route>
            <Route path="/page/:pageNumber" element={<HomeScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        <Waze />
        <WA number="+972532266676" text="הודעה מסויימת" />
        <ButtomNavigation />
        <Social
          youtube="https://www.youtube.com/"
          facebook="https://www.facebook.com/"
          tiktok="https://www.tiktok.com/"
          instagram="https://www.instagram.com/"
        />
        <Footer />
        <UnderFooter />
      </Router>
    </div>
  );
}

export default App;
