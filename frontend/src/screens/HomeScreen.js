import React, { useEffect } from "react";
import Meta from "../components/Meta.js";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import Paginate from "../components/Paginate.js";
import { listProducts } from "../actions/productAction.js";
import ProductsCarousel from "../components/ProductsCarousel.js";
import { Link } from "react-router-dom";
import NewProduct from "../components/NewProduct.js";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { pageNumber } = useParams() || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta
        title="Home"
        description="Welcome To Asser-Store"
        keywords="electronics, buy electronics, cheap electronics"
      />
      {!keyword ? (
        <ProductsCarousel />
      ) : (
        <Link to="/" className="btn btn-outline-dark">
          חזור
        </Link>
      )}
      <h2 className="mt-4" style={{ textAlign: "center" }}>
        המוצרים החמים
      </h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div
            className="products"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <NewProduct />
            <NewProduct />
            <NewProduct />
            <NewProduct />
            <NewProduct />
          </div>
          {/* <Row>
            {products.map((product) => (
              <Col key={product._id} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          /> */}
        </>
      )}
    </>
  );
};

export default HomeScreen;
