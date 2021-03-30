import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { db } from "../database/Firebase-Config";

const Products = () => {
  let product_array = [];
  const product = () => {
    db.collection("product").onSnapshot((snapshot) => {
      product_array = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setData(product_array);
    });
  };

  useEffect(() => {
    product();
  }, []);

  const [data, setData] = useState([]);

  return (
    <Product>
      {data.map((product) => {
        return (
          <ProductCard
            title={product.product.title}
            company={product.product.company}
            price={product.product.price}
            image={product.product.image}
            rating={product.product.rating}
          ></ProductCard>
        );
      })}
    </Product>
  );
};

export default Products;

const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: -250px;
  position: relative;
  padding: 0px 30px 0px 30px;
`;
