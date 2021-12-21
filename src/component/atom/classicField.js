import React from 'react'
import styled from "styled-components";
const ClassicField = ({className, type, name, value, onChange}) => {
    return (
        <Styles className={className}>
            <input 
            type={type} 
            name={name}
            value={value}
            onChange={onChange}/>
        </Styles>
    )
}

export default ClassicField
const Styles = styled.div`
input{
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid #CECECE;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

`