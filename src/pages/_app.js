import Layout from '@/components/Layout'
import '@/styles/globals.css'
import React from 'react'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
   </Layout>
  
  )
}
