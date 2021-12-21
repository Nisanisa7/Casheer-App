import styled from 'styled-components';
export const StylingLogin = styled.div`
.wrapper{
    width: 500px;
    background: #FFFFFF;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05) !important;
    border-radius: 30px;
    padding-left: 70px;
    padding-right: 70px;
    margin-left: auto;
    margin-right: auto;
    /* height: 700px; */
    margin-top: 50px;
        .logo{
            padding-top: 42px;
            padding-bottom: 36px;
            text-align: center;
            color: #F24F8A
        }
        .welcome-wagoon{
            color: #57CAD5;
        }
        .input-field{
            margin-top: 35px;
        }
        .forgot-pass{
            margin-top: 35px;
            text-align-last: right;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
        }
        .forgot-pass a, .register-link a{
            color: #7E98DF;
            text-decoration: none;
        }
         h6 {
            display: flex;
            margin-top: 50px;
            flex-direction: row;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: #848484;
     
            }
            h6:before,
            h6:after {
              flex-grow: 1;
              height: 1px;
              content: "";
              background-color:  #848484;
              position: relative;
              top: 0.5em;
              margin-left: 10px;
              margin-right: 10px;
   
            }
            h6:before {
              margin-top: 2px;

            }
            h6:after {
              margin-top: 2px;
            }
        .button{
            margin-top: 35px;
            width: 360px;
            height: 60px;
            cursor: pointer;
            text-align: center;

            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
                img{
                    width: 17px;
                    height: 18px;
                    margin-right: 15px;
                }
        }
        .register-link{
            margin-top: 30px;
            color: #313131;
            text-align: center;
        }
        .hidden{
            visibility: hidden;
            margin-top: 1px;
        }
}





`