import React, { useState, useEffect, SetStateAction } from 'react';
import axios from 'axios';
import { CardCarrinho } from '../../../components/CardCarrinho';
import { Container } from '../../../components/Container';
import { Titulo } from '../../../components/Titulo';
import { Button } from '../../../components/Button';
import { Submit, TratarValor } from '../../../utils';
import * as S from '../style'

interface FecharPedidoProps {
  setMapeamento: React.Dispatch<SetStateAction<boolean>>;
  mapeamento: boolean;
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
  setSuccess: React.Dispatch<SetStateAction<boolean>>;
}

export default function FecharPedido({ setMapeamento, mapeamento, setOpenModal, setSuccess }: FecharPedidoProps) {
  const [pedidos, setPedidos] = useState<any>()

  useEffect(() => {
    const response: any = typeof window !== "undefined" && localStorage.getItem('carrinho')
    setPedidos(JSON.parse(response))
  }, []);

  const excluir = (index: number) => {
    const list = [...pedidos];
    list.splice(index, 1);
    setPedidos(list);
    setMapeamento(!mapeamento)

    localStorage.setItem('carrinho', JSON.stringify(list))
  };

  const total = pedidos?.reduce(function (total: number, pedidos: any) {
    return total + pedidos?.valor_total;
  }, 0);

  const enviar = () => {
    axios.post('https://poly-2af89-default-rtdb.firebaseio.com/pedidos.json', {
      pedidos: [...pedidos]
    })
      .then(() => {
        setOpenModal(true)
        setSuccess(true)
        localStorage.removeItem('carrinho');
      })
      .catch(() => setOpenModal(true))
  }

  return (
    <Container>
      <>
        <Titulo text1='Fechar' text2='Pedido' />
        <S.SectionPedido  >
          <S.ProdutosPedido>
            {pedidos?.map((item: any, index: number) => {
              return (
                <CardCarrinho
                  key={index}
                  img={item.img}
                  roupa={item.roupa}
                  valor={TratarValor(item.valor_total)}
                  quantidade={item.quantidade}
                  tamanho={item.tamanho}
                  valorUnitario={TratarValor(item.valor_unitario)}
                  action={() => excluir(index)}
                />
              )
            })}
          </S.ProdutosPedido>
          <S.FecharPedido>
            <S.Total><span>Total: </span>
              R$ {TratarValor(total)}
            </S.Total>
            <S.BoxButtons>
              <Button text='Continuar Comprando' width='210px' action={() => Submit('/loja')} />
              <Button text='Enviar Pedido' action={() => enviar()} />
            </S.BoxButtons>
          </S.FecharPedido>
        </S.SectionPedido>
      </>
    </Container>
  )
}
