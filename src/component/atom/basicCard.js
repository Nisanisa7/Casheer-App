import styled from "styled-components";
const BasicCard = ({children, className}) => {
    return (
        <Styles className={className}>
            {children}
        </Styles>
    )
}

export default BasicCard
const Styles = styled.div`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`