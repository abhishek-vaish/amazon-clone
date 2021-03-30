import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Products from "./Products";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Products></Products>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: #eaeded;
`;
