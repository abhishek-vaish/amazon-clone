import React from "react";
import styled from "styled-components";

const Banner = () => {
  return <BannerTemplate></BannerTemplate>;
};

export default Banner;

const BannerTemplate = styled.div`
  background-image: url(https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg);
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  margin: 0px 10px 0px 10px;
`;
