import styled from "styled-components";
export const StyledHome = styled.div`
  .wrapper {
    display: flex;
    flex-direction: row;
    .left-container {
      height: 100%;
      width: 70%;
      .nav {
        width: 100%;
        height: 100px;
      }
      .sidebar {
        top: 100px;
      }
      .food-items-wrapper {
        height: 100%;
        background: rgba(190, 195, 202, 0.3);
        .row {
          margin-left: 130px;
        }
        .seemore {
          background: #f8dee1;
          height: 50px;
          border: none;
          margin-top: 50px;
          width: 250px;
          text-align: center;
          margin-bottom: 20px;
          border-radius: 10px;
          /* @media screen and (min-width: 576px) {
            font-size: 14px;
            margin-left: 5px;
          } */
          @media screen and (min-width: 768px) {
            margin-left: 85px;
          }
          @media screen and (min-width: 992px) {
            margin-left: 155px;
          }
          @media screen and (min-width: 1200px) {
            margin-left: 200px;
          }
          .fa {
            margin-left: 20px;
          }
        }
      }
    }
    .right-container {
      background: pink;
      height: 100%;
      width: 30%;
      position: relative;
      .right-navbar {
        width: 100%;
        height: 100px;
      }
      .menu-sidebar {
        height: 100%;
        top: 100px;
      }
      .item-cart {
        width: 100%;
        height: 65vh;
        overflow: auto;
        margin-bottom: 25px;
      }
      .text-wrapper {
        display: flex;
        flex-direction: row;
        margin-left: 20px;
        margin-right: 20px;
        .total {
        }
        .total-price {
          margin-left: 150px;
        }
      }
      .ppn {
        margin-left: 20px;
      }
      .button-wrapper {
        margin-left: 20px;
        button {
          width: 350px;
          height: 61px;
          margin-bottom: 18px;
        }
      }
    }
  }
`;
