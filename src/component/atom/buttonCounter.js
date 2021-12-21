import React from "react";
import styled from "styled-components";

const ButtonCounter = ({className, counter, minus, number}) => {
  return (
    <Styles>
      <button className={`decrement ${className}`} onClick={minus}>-</button>
      <label className={`number  ${className}`}>{number}</label>
      <button className={`counter  ${className}`} onClick={counter}>+</button>
    </Styles>
  );
};

export default ButtonCounter;
const Styles = styled.div`
  display: flex;
  .decrement{
            outline: none;
            width: 100%;
            height: 100%;
            background: rgba(130, 222, 58, 0.2);
            border: 1px solid #82DE3A;
            font-size: 30px;
            color: #82DE3A;
            cursor: pointer;

        }
        .number{
            width: 100%;
            height: 36px;
            border: 1px solid #82DE3A;
            color: #82DE3A;
            font-size: 30px;
            text-align: center;
        }
        .counter{
            outline: none;
            width: 100%;
            height: 100%;
            background: rgba(130, 222, 58, 0.2);
            border: 1px solid #82DE3A;
            font-size: 30px;
            color: #82DE3A;
            cursor: pointer;

        }
`;
