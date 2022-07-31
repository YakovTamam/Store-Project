import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/FormContainer.js";
import CheckoutSteps from "../components/CheckoutSteps.js";
import { createOrder } from "../actions/orderActions.js";

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  // Calculate Prices
  const addDecimal = num => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimal(cart.itemsPrice > 100 ? 0 : 100);

  cart.taxPrice = addDecimal(Number((0.15 * cart.itemsPrice).toFixed(2)));

  cart.totalPrice = addDecimal(
    (
      Number(cart.itemsPrice) +
      Number(cart.shippingPrice) +
      Number(cart.taxPrice)
    ).toFixed(2)
  );

  const orderCreate = useSelector(state => state.orderCreate);
  const { order, success, error } = orderCreate;

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
    }
  }, [navigate, success, order]);

  const placeOrederHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Assress: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{" "}
                {cart.shippingAddress.country},{" "}
                {cart.shippingAddress.postalCode}.
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment: </h2>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup>
                  {cart.cartItems.map((item, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col md={3}>
                          <Image src={item.image} alt={item.name} fluid />
                        </Col>
                        <Col md={9}>
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                          <p>
                            <strong>Price: {item.price}</strong>
                          </p>
                          <p>
                            <strong>Quantity: {item.qty}</strong>
                          </p>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <h2>Order Summary</h2>
            </ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Items</Col>
                <Col>${cart.itemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Shipping</Col>
                <Col>${cart.shippingPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Tax</Col>
                <Col>${cart.taxPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total</Col>
                <Col>${cart.totalPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              {error && <Message variant='danger'>{error}</Message>}
            </ListGroup.Item>
            <Button
              variant='primary'
              disabled={cart.cartItems === 0}
              onClick={placeOrederHandler}>
              Place Order
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrderScreen;
