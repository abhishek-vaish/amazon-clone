import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <Container>
      <HeaderLogo>
        <img
          src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
          alt="logo"
        />
      </HeaderLogo>

      <WelcomeContent>
        <LocationOnIcon />
        <ContentBlock>
          <OneContent>Hello</OneContent>
          <SecondContent>Select your address</SecondContent>
        </ContentBlock>
      </WelcomeContent>

      <SearchBox>
        <Input type="text"></Input>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </SearchBox>

      <WelcomeContent>
        <ContentBlock>
          <OneContent>Hello, Sign in</OneContent>
          <SecondContent>Account & Lists</SecondContent>
        </ContentBlock>
      </WelcomeContent>

      <WelcomeContent>
        <ContentBlock>
          <OneContent>Returns</OneContent>
          <SecondContent>& Orders</SecondContent>
        </ContentBlock>
      </WelcomeContent>

      <CartBasket>
        <ShoppingBasketIcon />
        {/* <CountSubScript>4</CountSubScript> */}
      </CartBasket>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  font-family: "PT Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #131921;
  color: white;
  font-size: 10pt;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-top: 10px;
  }
`;

const WelcomeContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 10px;
`;

const ContentBlock = styled.div``;

const OneContent = styled.div``;

const SecondContent = styled.div`
  font-weight: bold;
`;

const SearchIconContainer = styled.div`
  display: flex;
  justifiy-content: center;
  align-items: center;
  background-color: #f79b34;
  padding: 4px;
  color: black;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const SearchBox = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  border-radius: 4px;
  &:focus {
    border: 1px solid #f79b34;
  }
`;

const Input = styled.input`
  height: 30px;
  flex: 1;
  border: none;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

const CartBasket = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;
`;
