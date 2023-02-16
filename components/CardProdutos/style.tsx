import styled from 'styled-components'

interface Props {
    margin?: boolean;
}

export const Box = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
    /* margin-right:  ${({ margin }) => margin ? '53px' : '0'};    */

    /* :nth-child(3n){
        margin-right: 0;
    } */
`;

export const Titulo = styled.p`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: #ff9999;
    margin: 0;
`;

export const Valor = styled.p`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 26px;
    color: #988084;
    margin: 0 0 15px 0;
`;

export const ImagemProduto = styled.img`
    :hover{
        transition: all 0.5s;
        transform: scale(1.2);
    }
`;
export const BoxImagem = styled.div`
    width: 253px;
    height: 353px;
    overflow: hidden;
`;

