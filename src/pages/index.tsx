import Head from "next/head"
import { Container } from "@styles/pages/HomeStyle"
import { HeroSection } from "@components/pages/Home/HeroSection"
import { Experiences } from "@components/pages/Home/Experiences"
import { ProjectsSection } from "@components/pages/Home/ProjectsSection"
import { OthersProjects } from "@components/pages/Home/OthersProjects"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Kayo Elias - Full-Stack Developer</title>
      </Head>
      <HeroSection />
      <Experiences />
      <ProjectsSection />
      <OthersProjects />
    </Container>
  )
}
