import styled from "styled-components";
export const StyledAdmin = styled.div`
  .wrapper {

    .left-container {
      height: 100%;
      width: 100%;
      .nav {
        width: 100%;
        height: 100px;
      }
      .sidebar {
        top: 100px;
      }
      .food-items-wrapper {
        /* height: 100%; */
        background: rgba(190, 195, 202, 0.3);
        width: 100%;
        .row {
          margin-left: 130px;
          .button-delete {
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
              rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            border: none;
            outline: none;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            margin-top: 15px;
            position: absolute;
            z-index: 1;
                .fa{
                    color: red;
                }
          }
        }
        .seemore {
          background: #f8dee1;
          height: 50px;
          border: none;
          margin-top: 50px;
          width: 250px;
          text-align: center;
          margin-left: 200px;
          margin-bottom: 20px;
          border-radius: 10px;
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
        width: 390px;
        height: 100px;
      }
      .menu-sidebar {
        height: 100%;
        top: 100px;
      }
      .form-wrapper{
        padding-top: 20px;
      }
      .food{
         
      }
      label{
          padding-left: 35px;
          padding-bottom: 15px;
      }
      .inputfield{
        margin-left: 35px;
        margin-right: 35px;
        margin-bottom: 20px;
        /* width: 300px; */
        height: 50px;
      }
      .btn-update{
        margin-top: 10px;
        margin-left: 35px;
        margin-right: 35px;
        margin-bottom: 20px;
        width: 320px;
        height: 50px;
      }
    }
  }
`;
