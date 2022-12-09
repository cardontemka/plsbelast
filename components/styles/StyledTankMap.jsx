import styled from "styled-components";

export const StyledTankMap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: green;
`