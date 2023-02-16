import '../../styles/globals.css'
import React, { useState } from 'react';
import Head from 'next/head'
import { Menu } from '../../components/Menu'
import { Rodape } from '../../components/Rodape'
import { ModalPedido } from '../../components/ModalPedido'
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)
  const [mapeamento, setMapeamento] = useState()
  const [openModal, setOpenModal] = useState(false)
  const [success, setSuccess] = useState(false)

  return (
    <>
      <Head>
        <title>Loja de Roupas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Oswald:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <ModalPedido open={openModal} success={success} action={() => setOpenModal(false)} />
      <Menu open={open} setOpen={setOpen} mapeamento={mapeamento} />
      <Component
        {...pageProps}
        open={open}
        setOpen={setOpen}
        mapeamento={mapeamento}
        setMapeamento={setMapeamento}
        setOpenModal={setOpenModal}
        setSuccess={setSuccess}
      />
      <Rodape />
    </>
  )
}

export default MyApp