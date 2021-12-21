import React from 'react'
import styled from 'styled-components'

const Buttons = ({className, children, type, color,onClick}) => {
    return (
        <Button className={className}>
            <button type={type} className={`button ${color} ${className}`} onClick={onClick}>
                {children}
            </button>
        </Button>
    )
}

export default Buttons

const Button = styled.button`
 width: 100%;
height: 100%;
border: none;
    outline: none;
    background: none;
.button{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    box-sizing: border-box;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    &.pink{
        background-color: #F24F8A;
    }
    &.blue{
        background-color: #57CAD5
    }
}
`

