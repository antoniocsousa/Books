import styled from "styled-components";

export const Title = styled.h2`
    font-size: ${props => props.size || '2rem'};
    color: ${props => props.color || '#000000'};
`