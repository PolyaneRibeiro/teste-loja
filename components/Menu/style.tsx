import styled from 'styled-components'

export const Main = styled.div`
    background: #55474a;
    width: 100%;
    height: 157px;
    z-index:0;
`;

export const Box = styled.div`
    display: flex;
    align-items: center ;
    justify-content: space-between;
`;

export const Logo = styled.img`
    margin-top: 15px;
    cursor: pointer;
`;

export const Icon = styled.button`
    background: #ffafb8;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
`;

export const Quantidade = styled.div`
    background: #988084;
    border-radius: 100%;
    position: absolute;
    width: 22px;
    height: 22px;
    border: 0;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 4px;
    margin-top: -8px;
    margin-right: -5px;
    font-size: 13px;
    z-index: 0;   
`;

export const BoxIcon = styled.div`
    display: flex;
    justify-content: flex-end;
`;

