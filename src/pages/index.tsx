import React from "react"
import Head from "next/head"

import VercelLogo from '../assets/vercel.svg'
import { Container } from "../styles/pages/home"

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <VercelLogo />

      <h1>Hello world!</h1>
      <p>
        A reactJS, Next.JS structure made by
        <pre>@eliasallex</pre>
      </p>
    </Container>
  )
}

export default Home
