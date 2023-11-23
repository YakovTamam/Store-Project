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
import SolverButton from "../components/SolverButton.js";
import SolveProblemSections from "../sections/SolveProblemSections.js";
import HotProductsSections from "../sections/HotProductsSections.js";

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
          {/* TODO: Sections */}
          <div>
            <HotProductsSections />
          </div>

          <div>
            <SolveProblemSections />
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
