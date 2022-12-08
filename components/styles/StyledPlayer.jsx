import styled from "styled-components";

export const StyledPlayer = styled.div`
    position: absolute;
    top: ${props => props.y * 4}px;
    left: ${props => props.x * 4}px;
    width: 50px;
    height: 50px;
    background-color: gray;
    border-top: 3px solid ${props => props.up ? 'red' : 'black'};
    border-bottom: 3px solid ${props => props.down ? 'red' : 'black'};
    border-left: 3px solid ${props => props.left ? 'red' : 'black'};
    border-right: 3px solid ${props => props.right ? 'red' : 'black'};
`