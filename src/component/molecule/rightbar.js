import React, { Children, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
const RightBar = ({navbar, children, sidebar, totalitem, title}) => {
    


    return (
        <Styles>
            
            <nav className={` ${navbar}`}>
                <div className="text f-25">              
                 {title}
                </div>
                <div className="counter f-20">
                  {totalitem}
                </div>
            </nav>
            <div className={`sidebar ${sidebar}`}>
                {children}
            </div>
        </Styles>
    )
}

export default RightBar
const Styles = styled.div`
nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
    position: absolute;
    border-left:  1px solid #CECECE;

    .text{
        padding-top: 34px;
        text-align: center !important;
    }
    .counter{
        text-align: center;
        width: 25px;
        height: 25px;
        background: #57CAD5;
        border-radius: 30px;
        margin-left: 8px;
        margin-top: 38px;
        color: white;
    }

}
.sidebar{
    /* width: 390px; */
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #CECECE;
    position: absolute;
}

`
