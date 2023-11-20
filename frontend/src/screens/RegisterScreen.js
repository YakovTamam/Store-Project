import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import FormContainer from "../components/FormContainer.js";
import { register } from "../actions/userActions.js";

const RegisterScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>דף הרשמה</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-2" controlId="Name">
          <Form.Label>שם</Form.Label>
          <Form.Control
            type="name"
            placeholder="הזן שם"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2" controlId="email">
          <Form.Label>אימל</Form.Label>
          <Form.Control
            type="email"
            placeholder="הזן כאן"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2" controlId="password">
          <Form.Label>סיסמה</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2" controlId="confirmPassword">
          <Form.Label>אישור סיסמה</Form.Label>
          <Form.Control
            type="password"
            placeholder="הזן שוב את הסיסמה"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-4">
          הירשם
        </Button>
      </Form>
      <Row className="py-4">
        <Col>
          יש לך כבר משתמש?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            לחץ להתחברות
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
