import Head from "next/head";
import Image from "next/image";
import { Container } from "@styles/pages/HomeStyle";

export default function AboutMe() {
  return (
    <Container>
      <Head>
        <title>Kayo Elias - Full-Stack Developer - Sobre mim</title>
      </Head>
      <h1>Conteúdo legal sobre mim</h1>
    </Container>
  );
}
