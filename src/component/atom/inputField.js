import { TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const Inputfield = ({id, className, label, name, value, onChange, type, defaultValue, disabled, InputProps}) => {
    return (
        <Styles className={className}>
            <TextField
            className="input"
            id={id}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            defaultValue={defaultValue}
            disabled= {disabled}
            InputProps = {InputProps}/>
        </Styles>
    )
}
export default Inputfield
const Styles = styled.div`

.input{
    width: 100%;
}

`