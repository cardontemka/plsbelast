import styled from "styled-components";

export const StyledText = styled.div`
    position: absolute;
    display: ${props => props.show ? 'none' : 'flex'};
    color: black;
    font-size: 5vw;
`