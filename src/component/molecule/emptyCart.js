import React from "react";
import { IconFood } from "../../assets/icons";
import styled from "styled-components";
const EmptyCart = () => {
  return (
    <Styles>
      <img src={IconFood} alt="" />
      <div className="title">Your cart is empty</div>
      <div className="sub-title grayish">Please add some items from the menu</div>
    </Styles>
  );
};

export default EmptyCart;
const Styles = styled.div`
  position: relative;
  img {
    /* display: block; */
    margin-left: 65px;
    /* margin-right: 50px; */
    /* left: 50%; */
    @media screen and (min-width: 768px) {
      /* margin-left: 40px;
      margin-right: 40px; */
      /* width: 155px;
      height: 155px; */
    }
    @media screen and (min-width: 992px) {
      /* margin-left: 45px;
      margin-right: 45px; */
      margin-left: 55px;
      width: 200px;
      height: 200px;
    }
    @media screen and (min-width: 1280px) {
      /* left: 100%; */
      width: 258px;
      margin-left: 65px;
      height: 258px;
    }
  }
  .title {
    text-align: center;
    position: absolute;
    top: 79%;
    /* @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 26px;
      left: 35px;
    } */
    @media screen and (min-width: 992px) {
      left: 55px;
      font-size: 25px;
      line-height: 33px;
    }
    @media screen and (min-width: 1280px) {
     left: 75px;
     font-size: 30px;
     line-height: 39px;
    }
    /* left: 78px; */
  }
  .sub-title {
    top: 98%;
    /* left: 25px; */
    position: absolute;
    text-align: center;
    /* @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 26px;
      left: 35px;
    } */
    @media screen and (min-width: 992px) {
      left: 45px;
      font-size: 20px;
      line-height: 26px;
    }
    @media screen and (min-width: 1280px) {
     left: 65px;
     font-size: 25px;
     line-height: 33px;
    }
  }
`;
