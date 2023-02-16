import styled from 'styled-components'

export const CardCarrinho = styled.div`
    display: flex;
    align-items: flex-start;
    border-bottom: 2px dotted #fde3e3;
    border-radius: 10px;
    padding: 10px;
    margin-right: 12px;
    margin-bottom: 20px;

`;

export const Thumbnail = styled.img`
    width: 70px;
    margin-right: 10px;
`;

export const Titulo = styled.p`
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    margin: 0;
    font-size: 18px;
    color: #ff9999;
`;

export const Valor = styled.p`
    font-family: 'Oswald', sans-serif;
    color: #988084;
    margin-top:0%;
`;

export const Quantidade = styled.p`
    font-size: 14px;
    color: #988084;
`;

export const ValorUnitario = styled.p`
    font-size: 12px;
    color: #988084;
    margin-bottom: 0;

    span {
        letter-spacing: 1px;
    }
`;

export const Conteudo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;;
`;

export const Icon = styled.div`
    cursor: pointer;
`;