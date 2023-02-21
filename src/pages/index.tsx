import Head from "next/head"
import { Container } from "@styles/pages/HomeStyle"
import { HeroSection } from "@components/pages/Home/HeroSection"
import { Experiences } from "@components/pages/Home/Experiences"
import { ProjectsSection } from "@components/pages/Home/ProjectsSection"
import { OthersProjects } from "@components/pages/Home/OthersProjects"

import { clientConfig } from "../services/sanityClientConfig"

interface MyInformations {
  myInformations: {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    address: {
      city: string
      streetNo: string
    }
    greetingText: string
    image: {
      _type: string
      asset: {
        _ref: string
        _type: string
      }
    }
    job: string
    jobDescription: string
    name: string
    techs: string[]
    socialnetwork: {
      _key: string
      _type: string
      icon: {
        _type: string
        asset: {
          _ref: string
          _type: string
        }
      }
      url: string
    }[]
  }
}

export default function Home({ myInformations }: any) {
  console.log(myInformations)

  return (
    <Container>
      <Head>
        <title>Kayo Elias - Full-Stack Developer</title>
      </Head>
      <HeroSection
        greetingText={myInformations.greetingText}
        description={myInformations.jobDescription}
        pdfUrl={myInformations.pdfUrl}
        profilePicture={myInformations.image}
        socialnetwork={myInformations.socialnetwork}
      />
      <Experiences />
      <ProjectsSection />
      <OthersProjects />
    </Container>
  )
}

export async function getStaticProps() {
  const myInformations = await clientConfig.fetch(`*[_type == "aboutYou"][0]`)

  return {
    props: {
      myInformations,
    },
  }
}
