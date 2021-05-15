import React from "react"
import Head from "next/head"

import VercelLogo from '../assets/vercel.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <VercelLogo />

      <main>
        <h1>Hello world!</h1>
        <h5>eliasallex</h5>
      </main>
    </div>
  )
}

export default Home
