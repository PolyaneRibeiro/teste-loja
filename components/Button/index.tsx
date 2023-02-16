import React from 'react';
import * as S from './style'

interface ButtonProps {
    text: string;
    action: () => void;
    width?: string;
}

export const Button = ({ text, action, width }: ButtonProps) => {
    return (
        <S.Button onClick={action} width={width}>
            {text}
        </S.Button>
    )
}