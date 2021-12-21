import React from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { ButtonCounter } from '../atom';
const CartItems = ({image, productName, price, key, counter, number, minus}) => {
    // const dispatch= useDispatch()
    // const cart = useSelector(state => state.carts.carts)
    // const [count, setCount] = useState(0);
    // let IdFood = cart.map(function(item){
    //     return item.idfood
    // })
    // let qty = cart.map(function(item){
    //     return item.qty
    // })
    // console.log(qty);
    // const handleIncrement = () => {
    //     if (count < qty) {
    //       setCount(count + 1);
    //     } else {
    //       setCount(qty);
    //     }
    //   };

    return (
        <Styles>
            <div className="thumbnail">
             <img src={image} alt="" />
            </div>
            <div className="item">
                <div className="f-25">
                    {productName}
                </div>
                <ButtonCounter 
                counter={counter}
                number={number}
                minus={minus}
                className="btn-counter"></ButtonCounter>
            </div>
            <div className="price f-20">
                {price}
            </div>
        </Styles>
    )
}

export default CartItems
const Styles = styled.div`
display: flex;
flex-direction: row;
width: 100%;

margin-top: 38px;

position: relative;
.thumbnail{
    width: 100px;
    height: 100px;
    margin-left: 24px;
    img {
        display: block;
        border-radius: 5px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: 100%;
    }
}
.item{
    margin-left: 21px;
    .f-25{
        margin-bottom: 35px;
    }
    .btn-counter{
        width: 45px;
        height: 40px;
    }
}
.price{
    position:absolute;                 
    bottom: 20%;                         
    right: 5%;
}

`