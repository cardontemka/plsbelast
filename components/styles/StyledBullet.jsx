import styled from "styled-components";

export const StyledBullet = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: yellow;
`