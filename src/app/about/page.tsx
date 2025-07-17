import { NavBar } from '@/components/NavBar'
import React from 'react'

export default function page() {
  return (
    <>
      <NavBar />
      <div style={{ color: "white", padding: "15px", maxWidth: "80vw", margin: "auto" }}>
        <h1 style={{margin: "15px 0px"}}>About</h1>
        <p>I used the PokéAPI as the main tool to bring this experience to life, applying API consumption concepts and putting both use client and use server from Next.js into practice — using use client only when it was truly necessary. This is actually a pretty old project, from back when Next.js still used the pages router. I decided to update it because it didn’t follow best practices at the time, and I wanted to improve it overall. So yeah — it’s not exactly a serious portfolio project, but it was a lot of fun to build and experiment with all these concepts. Hope you enjoyed it too! 😊</p>
      </div>
    </>
  )
}
