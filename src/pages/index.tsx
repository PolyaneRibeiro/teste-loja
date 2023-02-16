import React, { useState, useEffect, SetStateAction } from 'react';
import axios from 'axios'
import { Titulo } from "../../components/Titulo";
import { Container } from '../../components/Container'
import { CardProdutos } from "../../components/CardProdutos";
import { MenuLateral } from '../../components/MenuLateral';
import { Submit, TratarValor } from '../../utils'
import * as S from './style'

export default function Loja() {
  const [roupas, setRoupas] = useState<any>()
  const [filtro, setFiltro] = useState<Array<string | unknown>>()
  const [active, setActive] = useState<string>()

  useEffect(() => {
    const url = window.location.href
    const splitUrl = url.split('?')
    const splitCategoria = splitUrl[1]

    axios.get('https://poly-2af89-default-rtdb.firebaseio.com/loja.json')
      .then((response) => {
        setRoupas(Object.entries(response.data))
        if (splitCategoria !== undefined) {
          const filterRoupasSplit = Object.entries(response.data).filter((item: any) => {
            return item[1].categoria === splitCategoria
          })
          setFiltro(filterRoupasSplit)
          setActive(splitCategoria)
        }
        else {
          setFiltro(Object.entries(response.data))
          setActive('todos')
        }
      })
  }, []);

  const handleRoupas = (category: string) => {
    const filterRoupas = roupas?.filter((item: any) => {
      return item[1].categoria === category
    })
    setFiltro(filterRoupas)
    setActive(category)
  }

  return (
    <Container>
      <>
        <Titulo text1='Loja' />
        <S.Section align='start'>
          <MenuLateral
            action={handleRoupas}
            actionTodos={() => { setFiltro(roupas), setActive('todos') }}
            active={active}
          />
          <S.Produtos>
            {filtro && filtro.map((item: any) => {
              return (
                <CardProdutos
                  img={item[1].img}
                  roupa={item[1].roupa}
                  valor={`R$ ${TratarValor(parseFloat(item[1].valor))}`}
                  action={() => Submit(`/produto?${item[0]}`)}
                  key={item[0]}
                  margin
                />
              )
            })}
          </S.Produtos>
        </S.Section>
      </>
    </Container>
  )
}
