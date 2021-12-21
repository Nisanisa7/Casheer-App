import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spaghetti } from "../../assets/images";
import { ButtonCounter, Buttons, FoodCard } from "../../component/atom";
import styled from "styled-components";
import * as string from "../../configs/redux/string";
import {
  Navbar,
  RightBar,
  CartItems,
  EmptyCart,
  ModalCustom,
  useModal,
} from "../../component/molecule";
import { Addcart } from "../../configs/redux/actions/cartAction";
import { StyledHome } from "./Styled";
import randomString from "random-string";
import { useHistory } from "react-router-dom";
import { addOrder } from "../../configs/redux/actions/OrderAction";
import { getFood } from "../../configs/redux/actions/FoodAction";
// import Modal from "react-bootstrap/Modal";
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartS = useSelector((state) => state.carts.carts);
  const total = useSelector((state) => state.carts.totalPrice);
  const cashier = useSelector((state) => state.user.profile);
  const {food, totalpage} = useSelector((state) => state.food)

  
  const destruct = {...cartS}
  const checked = (idfood) => {
    const result = cartS.findIndex((item) => item.idfood === idfood);
    if (result >= 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    dispatch(getFood(page))
  }, [page])



  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_API}/food/?limit=6&page=${page}`)
  //     .then((res) => {
  //       setItems([...items, ...res.data.item]);
  //       setTotalPage(res.data.totalpage);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [page]);

  const totalPrice = () => {
    let result = cartS.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.quantity * currentValue.price;
    }, 0);
    return result;
  };
  const calculation = useMemo(() => totalPrice(), [cartS]);
  let arr = []
  Object.values(destruct).forEach(value=>{
    arr.push(value.foodname)
  });
  const foods = arr.toString()
  const addCart = (data) => {
    dispatch(Addcart(data));
  };
  const handleIncrement = (index) => {
    dispatch({ type: string.INCREMENTQTY, payload: index });
    
  };
  const handleDecrement = (index) =>{
      dispatch({type: string.DECREMENTQTY, payload: index})
  }
  const handlePagination = () => {
    setPage((current) => current + 1);
  };
  const handleCancel = () =>{
    dispatch({ type: string.EMPTYCART , payload: {} })
  }
  const ppn = (calculation * 10)/100
  const overallPrice = calculation + ppn
  const receipt = randomString({
    length: 9,
    numeric: true,
    letters: false,
    special: false,
    exclude: []
  })
 
 const handleOrder = () =>{
  dispatch(addOrder(foods, cashier.name, overallPrice, receipt, cashier.iduser))
  dispatch({ type: string.EMPTYCART , payload: {} })
 }
  return (
    <StyledHome>
      {/* <ModalCustom show={show} 
      handleOpen={handleOpen}>
         {cartS.map((item, index) => (
           <>
            cashier={item.productname}
           </>
        ))}
      </ModalCustom> */}
      <div className="wrapper">
        <div className="left-container">
          <Navbar NavbarSize="nav" sidebarSize="sidebar" history title="Food Items" search Add historyPage="/history" />
          <div className="food-items-wrapper">
            <div className="row">
              {/* <h1>
                page : {page}, {totalPage}
              </h1> */}
              {food.map((item, index) => (
                <div className="col xl-4">
                  <FoodCard
                    className="foodcard"
                    chcecklist={checked(item.idfood)}
                    onClick={() => addCart(item, index)}
                    title={item.foodname}
                    image={item.image}
                    price={item.price}
                  />
                </div>
              ))}
              {page < totalpage && (
                <button className="f-20 seemore" onClick={handlePagination}>
                  Load more
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="right-container">
          <RightBar
            navbar="right-navbar"
            sidebar="menu-sidebar"
            totalitem={cartS.length}
            title="Cart"
          >
            {cartS.length === 0 ? (
              <EmptyCart />
            ) : (
              <>
                <div className="item-cart">
                  {cartS.map((item, index) => (
                    <CartItems
                      image={item.image}
                      productName={item.foodname}
                      price={item.price}
                      number={item.quantity}
                      key={index}
                      counter={() => handleIncrement(index)}
                      minus={()=> handleDecrement(index)}
                    />
                  ))}
                </div>
                <div className="text-wrapper">
                  <p className="f-24 total">Total</p>
                  <p className="f-24 total-price">Rp. {calculation} *</p>
                </div>
                <p className="f-20 ppn">*Belum termasuk ppn</p>
                <div className="button-wrapper">
                  <Buttons color="blue" onClick={handleShow}>
                    Checkout
                  </Buttons>
                  <Buttons color="pink" onClick={handleCancel}>Cancel</Buttons>
                </div>
              </>
            )}
          </RightBar>
        </div>
      </div>
      <Modal
        show={show}
        fade={false}
        onHide={handleClose}
        backdropC="static"
        keyboard={false}
        size="lg"
        className="modal"
      >
        <Modal.Header closeButton />
        <ModalHead className="modal-head">
          <div className="f-30">Checkout</div>
          <div className="f-25">Receipt no :#{receipt}</div>
        </ModalHead>
        <Cashier className="f-20 cashier">Cashier : {cashier.name}</Cashier>
        <Modal.Body>
          <BodyWrapper>
            <ModalBody className="modal-body">
              <div className="product-name f-25">
                {cartS.map((item, index) => (
                  <p>{item.foodname}</p>
                ))}
                ppn 10%
              </div>
              <div className="price f-25">
                {cartS.map((item, index) => (
                  <p>Rp. {item.price}</p>
                ))}
                Rp. {ppn}
              </div>
            </ModalBody>
            <div className="total f-25">Total : Rp. {overallPrice}</div>
            <div className="payment f-25">Payment : Cash</div>
            <Buttons className="btn" color="pink" onClick={handleOrder}>
              Print
            </Buttons>
            <div className="or f-25">Or</div>
            <Buttons className="btn" color="blue">
              Send Email
            </Buttons>
          </BodyWrapper>
        </Modal.Body>
      </Modal>
    </StyledHome>
  );
};

export default Home;
const ModalHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 23px 28px 0 47px;
`;
const Cashier = styled.div`
  padding: 0 28px 0 47px;
  margin-bottom: 30px;
`;
const BodyWrapper = styled.div`
  padding: 23px 20px 0 10px;
  .total {
    text-align: justify;
    text-align-last: right;
    margin-bottom: 35px;
  }
  .payment {
    margin-bottom: 40px;
    margin-left: 10px;
  }
  .btn {
    width: 100%;
    height: 78px;
    margin-bottom: 10px;
  }
  .or {
    text-align: center;
  }
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 45px;
`;
