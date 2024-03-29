import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../actions/orderActions.js";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVERED_RESET,
} from "../constants/orderConstants";

const OrderScreen = () => {
  const [sdkReady, setSdkReady] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderPay);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    // Calculate Prices
    const addDecimal = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimal(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );

    order.shippingPrice = addDecimal(order.itemsPrice > 100 ? 0 : 100);
  }

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVERED_RESET });
      dispatch(getOrderDetails(id));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, id, order, successPay, successDeliver, navigate, userInfo]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(id, paymentResult));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1 style={{ fontSize: "20px" }}>הזמנה: {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>משלוח</h2>
              <p>
                <strong>שם:</strong> {order.user.name}
              </p>
              <p>
                <strong>דוא"ל: </strong>
                <a href={"mailto:" + order.user.email}>{order.user.email}</a>
              </p>
              <p>
                <strong>כתובת: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
                {order.shippingAddress.country},{" "}
                {order.shippingAddress.postalCode}.
              </p>
              {order.isDelivered ? (
                <Message variant="success">נשלח ב {order.deliveredAt}</Message>
              ) : (
                <Message variant="danger">לא נשלח</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>תשלום: </h2>
              <p>
                <strong>דרך: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">שולם ב {order.paidAt}</Message>
              ) : (
                <Message variant="danger">לא שולם</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>מוצרים בהזמנה</h2>
              {order.orderItems.length === 0 ? (
                <Message>ההזמנה ריקה</Message>
              ) : (
                <ListGroup>
                  {order.orderItems.map((item, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col md={3}>
                          <Image src={item.image} alt={item.name} fluid />
                        </Col>
                        <Col md={9}>
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                          <p>
                            <strong>מחיר: {item.price}</strong>
                          </p>
                          <p>
                            <strong>כמות: {item.qty}</strong>
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
            <ListGroup variant="flush">
              <h2>סיכום הזמנה</h2>
            </ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>מוצרים</Col>
                <Col>₪{order.itemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>משלוח</Col>
                <Col>₪{order.shippingPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>מס</Col>
                <Col>₪{order.taxPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>סה"כ</Col>
                <Col>₪{order.totalPrice}</Col>
              </Row>
            </ListGroup.Item>
            {!order.isPaid && (
              <ListGroup.Item>
                {loadingPay && <Loader />}
                {!sdkReady ? (
                  <Loader />
                ) : (
                  <PayPalButton
                    amount={order.totalPrice}
                    onSuccess={successPaymentHandler}
                  />
                )}
              </ListGroup.Item>
            )}

            {loadingDeliver && <Loader />}
            {userInfo &&
              userInfo.isAdmin &&
              order.isPaid &&
              !order.isDelivered && (
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn btn-block"
                    onClick={deliverHandler}
                  >
                    סמן כנישלח
                  </Button>
                </ListGroup.Item>
              )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
