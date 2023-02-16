import styled from 'styled-components'

interface Props {
    active: boolean;
}

export const Main = styled.div`
    width: 20%; 
    margin-right: 5%;
    height: 100%;

    @media only screen and (max-width: 734px) {
        width: 100%;
    }
`;

export const TituloleCategorias = styled.p`
    font-size: 24px;
    font-family: 'Oswald', sans-serif;
    background: #988084;
    text-transform: uppercase;
    color: #fde3e3;
    padding-left: 6px;
    margin: 4px 0 0 0;
`;

export const LiCategorias = styled.li<Props>`
    font-family: 'Comfortaa', cursive;
    text-transform: uppercase;
    color: #ff9999;
    font-size: 18px;
    list-style-type: none;
    border-bottom: 3px dotted #fde3e3;
    padding: 10px 0 10px 6px;
    cursor: pointer;

    :hover {
        background: #ffafb8;
        color: #fff;
        
    }

    ${({ active }) => active && `
        background: #ffafb8;
        color: #fff;
    `};
`;

export const UlCategorias = styled.ul`
    padding-left: 0
`;



