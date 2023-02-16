import styled from 'styled-components'

interface Props {
    justify?: string;
    align?: string;
    wrap?: string
}

//geral
export const Section = styled.div<Props>`
   display: flex;
   justify-content: ${({ justify }) => justify ? justify : 'space-between'};
   align-items: ${({ align }) => align ? align : 'center'};
   flex-wrap: ${({ wrap }) => wrap ? wrap : ''};

      @media only screen and (max-width: 734px) {
        flex-direction: column;
    } 
`;


//pg home
export const Produtos = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 75%;
   align-items: center;
   justify-content: space-between;

   @media only screen and (max-width: 734px) {
        width: 100%;
    }   
`;

//pg Produto
export const Conteudo = styled.div`
    margin-left: 30px;

    @media only screen and (max-width: 734px) {
        margin-left: 0;
    }  
`;

export const Valor = styled.p`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    color: #988084;
    margin: 0;
`;

export const ImgRoupa = styled.img`
    margin-top: 50px;
    :hover{
        transition: all 0.5s;
        transform: scale(1.1);
    }
`;


export const Descricao = styled.p`
    line-height: 22px;    
`;

//pg fechar pedido
export const ProdutosPedido = styled.div`
   width: 100%;
   @media only screen and (max-width: 734px) {
        width: 100%;
    }  

`;

export const SectionPedido = styled.div<Props>`
    display: flex;
    align-items: center;
    flex-direction: column;
    
`;

export const FecharPedido = styled.div`
   width: 60%;

   @media only screen and (max-width: 734px) {
        width: 100%;
    }
`;

export const Total = styled.p`
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    color: #988084;
    text-align: center;

    span{
        color: #ff9999;
    }
`;

export const BoxButtons = styled.div`
   display: flex;
   justify-content:space-between;

`;