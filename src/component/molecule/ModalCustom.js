import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Buttons } from "../atom";
const ModalCustom = ({ show, handleOpen, children, className, total,casier, receipt,price, productname }) =>
show
    ? ReactDOM.createPortal(
        <Styles onCLick={handleOpen} className={className}>
          {/* <div className="card-wrapper"> */}
          <div className="modal-head">
            <div className="f-30">Checkout</div>
            <div className="f-25">Receipt no :#{receipt}</div>
          </div>
          <div className="f-20 cashier">Cashier : {casier}</div>
          <div className="modal-body">
            <div className="product-name f-25">
                {productname}
                ppn 10%
                
            </div>
            <div className="price f-25">
                {price}
                Rp. 10.500</div>
          </div>
          <div className="total f-25">Total : Rp.{total}</div>
          <div className="payment f-25">Payment :Cash</div>
          <Buttons className="btn" color="pink">Print</Buttons>
         <div className="or f-25">Or</div>
         <Buttons className="btn" color="blue">Send Email</Buttons>

        </Styles>,
        document.body
      )
    : null;

export default ModalCustom;
const Styles = styled.div`
  width: 746px;
  height: 781px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  left: 347px;
  top: 102px;
  padding: 23px 28px 47px;
  .modal-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .modal-body {
    display: flex;
    flex-direction: row;
    background: pink;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 45px;

}
.total {
 text-align: justify; 
 text-align-last: right;
 margin-bottom: 45px;
}
.payment{
    margin-bottom: 40px;
}
.btn{
 width: 100%;
 height: 78px;
 margin-bottom: 10px;
}
.or{
    text-align: center;
}
`;
