import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@styles/pages/HomeStyle'
import { HeroSection } from '@components/pages/Home/HeroSection'
import { Experiences } from '@components/pages/Home/Experiences'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Kayo Elias - Full-Stack Developer</title>
      </Head>
      <HeroSection />

      <Experiences />
    </Container>
  )
}
