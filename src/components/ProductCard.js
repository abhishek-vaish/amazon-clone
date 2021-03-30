import React from "react";
import styled from "styled-components";

const ProductCard = (props) => {
  return (
    <Card>
      <Image src={props.image}></Image>
      <Price>₹ {props.price}</Price>
      <Title>{props.title}</Title>
      <Company>{props.company}</Company>
      <Rating>
        {new Array(props.rating).fill().map((rating) => (
          <p>⭐</p>
        ))}
      </Rating>
      <AddCart>Add to Cart</AddCart>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  background-color: white;
  width: 300px;
  height: 400px;
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  display: block;
`;
const Price = styled.p`
  color: #767676;
  font-size: 17px;
  font-weight: 600;
  margin: 0;
`;
const Title = styled.p`
  color: #1a75c6;
  font-size: 13px;
  line-height: 18px;
  margin: 0;
  padding-top: 4px;
`;
const Company = styled.p`
  font-size: 11px;
  color: #767676;
  margin: 0;
  padding-top: 4px;
`;

const Rating = styled.div`
  display: flex;
  margin: 0;
`;

const AddCart = styled.button`
  background-color: #f0c14b;
  border: 1px solid #a88734;
  padding: 0px 6px 0px 7px;
  border-radius: 3px;
  color: black;
  cursor: pointer;
  font-size: 14px;
  widht: 100%;
`;
