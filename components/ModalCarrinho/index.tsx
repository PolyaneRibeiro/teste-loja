import React from 'react';
import { Button } from '../Button'
import { Submit, TratarValor } from '../../utils';
import * as S from './style'

interface ModalCarrinhoProps {
    open: boolean;
    close: () => void;
    carrinho: Array<string>

}

interface CarData {
    img: string;
    roupa: string;
    tamanho: string;
    quantidade: string;
    valor_total: string;
}

export const ModalCarrinho = ({ open, close, carrinho }: ModalCarrinhoProps) => {
    return (
        <>
            {open &&
                <>
                    <S.Background onClick={close}></S.Background>
                    <S.MainCarrinho>
                        <S.BoxCarrinho>
                            {carrinho?.length > 0 ? (
                                <>
                                    {carrinho.map((item: any, index) => {
                                        return (
                                            <S.CardCarrinho key={index}>
                                                <S.Thumbnail src={item.img}></S.Thumbnail>
                                                <div>
                                                    <S.Titulo>{item.roupa} - {item.tamanho}</S.Titulo>
                                                    <S.Conteudo>
                                                        <S.Quantidade>Quantidade: {item.quantidade}</S.Quantidade>
                                                        <S.Valor>R$ {TratarValor(item.valor_total)}</S.Valor>
                                                    </S.Conteudo>
                                                </div>
                                            </S.CardCarrinho>
                                        )
                                    })}

                                    <Button text='Ir para o Carrinho' width='180px' action={() => Submit('/fechar-pedido')} />
                                </>
                            ) : <p>Não há pedidos no carrinho</p>}
                        </S.BoxCarrinho>
                    </S.MainCarrinho>

                </>
            }
        </>
    )
}