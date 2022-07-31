import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path='/order' element={<OrderScreen />}>
                <Route path='/order/:id' element={<OrderScreen />} />
              </Route>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/payment' element={<PaymentScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/userList' element={<UserListScreen />} />
              <Route path='/cart/' element={<CartScreen />}>
                <Route path='/cart/:id' element={<CartScreen />} />
              </Route>
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
