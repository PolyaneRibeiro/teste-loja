import React, { useState, useEffect, SetStateAction } from 'react';
import { Container } from '../Container';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ModalCarrinho } from '../ModalCarrinho';
import * as S from './style'
import { Submit } from '../../utils';

interface MenuProps {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
    mapeamento?: boolean
}

export const Menu = ({ open, setOpen, mapeamento }: MenuProps) => {
    const [carrinho, setCarrinho] = useState<Array<string>>([])

    useEffect(() => {
        setTimeout(() => {
            const response: any = typeof window !== "undefined" && localStorage.getItem('carrinho')
            setCarrinho(JSON.parse(response))
        }, 30)
    }, [mapeamento]);

    return (
        <>
            <ModalCarrinho
                open={open}
                close={() => setOpen(false)}
                carrinho={carrinho}
            />
            <S.Main>
                <Container>
                    <S.Box>
                        <S.Logo src='./logo.png' onClick={() => Submit('/')} />
                        <S.BoxIcon>
                            {carrinho?.length > 0 && <S.Quantidade>{carrinho?.length}</S.Quantidade>}
                            <S.Icon onClick={() => setOpen(!open)}>
                                <AiOutlineShoppingCart color="#55474a" size={30} />
                            </S.Icon>
                        </S.BoxIcon>
                    </S.Box>
                </Container>
            </S.Main>
        </>
    )
}