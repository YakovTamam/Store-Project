import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>Asser-Store | {title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Asser-Store | Home",
  description: "Welcome To Asser-Store",
  keywords: "electronics, buy electronics, cheap electronics",
};

export default Meta;
