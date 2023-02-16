import React from 'react';
import * as S from './style'
import { mockMeuLateral } from '../../utils'

interface MenuLateralProps {
    action: (categoria: string) => void;
    actionTodos: () => void;
    active?: string
}

export const MenuLateral = ({ action, actionTodos, active }: MenuLateralProps) => {
    return (
        <S.Main>
            <S.TituloleCategorias>Categorias</S.TituloleCategorias>
            <S.UlCategorias>
                <S.LiCategorias onClick={actionTodos} active={active === 'todos'}>Ver Todos</S.LiCategorias>
                {mockMeuLateral.map(item => {
                    return (
                        <S.LiCategorias
                            onClick={() => action(item.value)}
                            active={active === item.value}
                        >
                            {item.categoria}
                        </S.LiCategorias>
                    )
                })}
            </S.UlCategorias>
        </S.Main>
    )
}