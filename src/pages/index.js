import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import RenderPokemon from '@/components/RenderPokemon/RenderPokemon'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='preload' href='../componenrs/RenderPokemon/RenderPokemon.css'/>
      </Head>
      <RenderPokemon />
    </>
  )
}