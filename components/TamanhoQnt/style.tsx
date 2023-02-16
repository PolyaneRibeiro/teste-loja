import styled from 'styled-components'

interface Props {
    active: boolean
}

export const Main = styled.div`
   margin-bottom: 30px;
   display: flex;

   @media only screen and (max-width: 432px) {
        flex-direction: column;
    }  
`;

export const Box = styled.div`
   width: 200px;
`;

export const Section = styled.div`
   display: flex;
   justify-content: 'space-between';
   align-items: center;
`;

export const SubTitulo = styled.p`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: #ff9999;
    margin-bottom: 10px;
`;

export const Tamanhos = styled.button<Props>`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: #988084;
    border: 1px solid #988084;
    width: 30px;
    height: 30px;
    text-align: center;
    margin-right: 10px;
    margin-top: 0;
    cursor: pointer;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${({ active }) => active && `
        background: #ff9999;
        color: #fff;
        border: 0;
    `};

    :hover{
        background: #ff9999;
        color: #fff;
        border: 0;
    }
`;

export const InputQnt = styled.input`
    font-family: 'Oswald', sans-serif;
    width: 50px;
    height: 30px;
    font-size: 20px;
    text-align: center;    
`;

export const Validacao = styled.p`
    color: red;
    font-size: 12px;
`;