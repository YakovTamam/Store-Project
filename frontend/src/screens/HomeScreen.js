import React, { useEffect } from "react";
import Meta from "../components/Meta.js";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { listProducts } from "../actions/productAction.js";
import { Link } from "react-router-dom";
import NewProduct from "../components/NewProduct.js";
import NewCarousel from "../components/NewCarousel.js";

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
        <NewCarousel />
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
            <NewProduct img="https://hulkcleaner.com/cdn/shop/products/anti-rust-1l.webp?v=1677175044&width=360" />
            <NewProduct img="https://hulkcleaner.com/cdn/shop/products/Anti-Rust-Gel.webp?v=1677755072&width=360" />
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
