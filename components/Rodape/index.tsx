import React from 'react';
import { Container } from '../Container';
import * as S from './style'

export const Rodape = () => {
    return (
        <S.Main>
            <Container bottom='0'>
                <S.Box>
                    <p>Rua Regente Feijó - 187, Roncon |  01130-000 - Ribeirão Pires/SP</p>
                    <S.Copyright>© Copyright 2022. Todos os direitos reservados. Poly vista-se bem.</S.Copyright>
                </S.Box>
            </Container>
        </S.Main>
    )
}