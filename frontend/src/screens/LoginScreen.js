import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import FormContainer from "../components/FormContainer.js";
import { login } from "../actions/userActions.js";

const LoginScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>הרשמה</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>דוא"ל</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2" controlId="password">
          <Form.Label>סיסמה</Form.Label>
          <Form.Control
            type="password"
            placeholder="הזן סיסמה"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button className="mt-3" type="submit" variant="primary">
          התחבר
        </Button>
      </Form>
      <Row className="py-5">
        <Col>
          לקוח חדש?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            להרשמה לחץ כאן
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
