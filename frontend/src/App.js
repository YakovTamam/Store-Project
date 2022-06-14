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

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
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
