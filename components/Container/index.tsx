import React from 'react';
import * as S from './style'

interface ConatinerProps {
    bottom?: string;
    children: JSX.Element
}

export const Container = ({ children, bottom }: ConatinerProps) => {
    return (
        <S.Main bottom={bottom}>
            {children}
        </S.Main>
    )
}