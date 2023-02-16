import styled from 'styled-components'

interface Props {
    bottom?: string
}

export const Main = styled.div<Props>`
    max-width: 1220px; 
    margin: 0 auto;
    margin-bottom: ${({ bottom }) => bottom ? bottom : '70px'};
    padding: 0 30px;
`;

