import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import * as S from './style'

interface CardCarrinhoProps {
    key: number;
    img: string;
    roupa: string;
    tamanho: string;
    quantidade: string;
    valor: string;
    valorUnitario: string;
    action: () => void
}

export const CardCarrinho = ({ key, img, roupa, tamanho, quantidade, valor, valorUnitario, action }: CardCarrinhoProps) => {
    return (
        <S.CardCarrinho key={key}>
            <S.Thumbnail src={img}></S.Thumbnail>
            <S.Conteudo>
                <div>
                    <S.Titulo>{roupa} </S.Titulo>
                    <S.Quantidade>Tamanho: {tamanho}</S.Quantidade>
                    <S.Quantidade>Quantidade: {quantidade}</S.Quantidade>
                </div>
                <S.Box>
                    <S.Icon><FaTrashAlt color="#988084" size={20} onClick={action} /></S.Icon>
                    <S.ValorUnitario>Valor Unitário: R$ <span>{valorUnitario}</span></S.ValorUnitario>
                    <S.Valor>R$ {valor}</S.Valor>
                </S.Box>
            </S.Conteudo>
        </S.CardCarrinho>
    )
}