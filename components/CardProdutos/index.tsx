import React from 'react';
import { Button } from '../Button';
import * as S from './style'

interface CardProdutos {
    img: string;
    valor: string;
    roupa: string;
    action: () => void;
    margin: boolean;
}

export const CardProdutos = ({ img, valor, roupa, action, margin }: CardProdutos) => {
    return (
        <S.Box margin={margin}>
            <S.BoxImagem>
                <S.ImagemProduto src={img} />
            </S.BoxImagem>
            <S.Titulo>{roupa}</S.Titulo>
            <S.Valor>{valor}</S.Valor>
            <Button text='Ver Produto' action={action} />
        </S.Box>
    )
}