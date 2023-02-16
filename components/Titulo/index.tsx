import React from 'react';
import * as S from './style'

interface TituloProps {
    text1: string;
    text2?: string
}

export const Titulo = ({ text1, text2 }: TituloProps) => {
    return (
        <S.Titulo>
            <S.ColorRose>#</S.ColorRose><S.ColorGray>{text1}</S.ColorGray><S.ColorRose>{text2}</S.ColorRose>
        </S.Titulo>
    )
}