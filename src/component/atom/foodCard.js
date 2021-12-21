import React from "react";
import styled from "styled-components";

const FoodCard = ({className, title, price, image, chcecklist, onClick}) => {
  return (
    <Styles className={className}>
      <div className="thumbnail">
        <img src={image} alt="" onClick={onClick}/>
        {chcecklist &&     
        <div className="check-list">
         <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i>
        </div> 
        }
        <div className="f-25">
            {title}
        </div>
        <div className="price f-25"></div>
        <b> {price} </b>
      </div>
    </Styles>
  );
};

export default FoodCard;
const Styles = styled.div`
  border: 1px #cecece;
  padding-top: 21px;
  .thumbnail {
    width: 200px;
    height: 200px;
    margin-bottom: 80px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px 10px 0px 0px;
      object-fit: cover;
      object-position: center right;
      display: block;
      margin-left: auto;
      margin-right: auto;
      cursor: pointer;
    }
    .check-list{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 30px;
      transform: translate(-50%, -50%);
        .fa-check-circle{
          width: 50px;
        }
    }
    .price{
      font-weight: bold;
    }
  }
`;
