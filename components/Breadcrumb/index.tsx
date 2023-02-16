import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import * as S from './style'

interface BreadcrumbProps {
    categoria: string;
    categoriaLink: string;
    produto: string
}

export const Breadcrumb = ({ categoria, categoriaLink, produto }: BreadcrumbProps) => {
    return (
        <S.Main>
            <S.Loja href='/'><IoIosArrowForward />Home</S.Loja>
            <S.Categoria href={`/?${categoriaLink}`}><IoIosArrowForward />{categoria}</S.Categoria>
            <S.Produto><IoIosArrowForward />{produto}</S.Produto>
        </S.Main>
    )
}