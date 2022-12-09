import styled from "styled-components";

export const StyledPlayer = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: gray;
    border-top: 3px solid ${props => props.up ? 'red' : 'black'};
    border-bottom: 3px solid ${props => props.down ? 'red' : 'black'};
    border-left: 3px solid ${props => props.left ? 'red' : 'black'};
    border-right: 3px solid ${props => props.right ? 'red' : 'black'};
`