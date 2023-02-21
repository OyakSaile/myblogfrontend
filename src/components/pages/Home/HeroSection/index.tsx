import Image from "next/image"
import { Container, GroupButtons } from "./styles"
import { InstagramLogo, LinkedinLogo } from "phosphor-react"

export const HeroSection = () => {
  return (
    <div className="container">
      <Container>
        <div>
          <h1>Hey I&apos;am Kayo Elias, a full-stack developer</h1>
          <h2>
            A boy who&apos;s passionate about create new features and do all the
            crazy ideas!
          </h2>

          <ul>
            <li>
              <a href="">ReactJS</a>
            </li>
            <li>
              <a href="">Typescript</a>
            </li>
            <li>
              <a href="">NextJS</a>
            </li>

            <li>
              <a href="">NodeJS</a>
            </li>

            <li>
              <a href="">Javascript</a>
            </li>
          </ul>

          <GroupButtons>
            <button>Contact Me</button>
            <ul>
              <li>
                <a href="https://www.instagram.com/kayoskada/">
                  <InstagramLogo size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kayoeliasgverdan/">
                  <LinkedinLogo size={24} />
                </a>
              </li>
            </ul>
          </GroupButtons>
        </div>
        <div>
          <Image src="/kayoelias.jpeg" fill alt="KAYO eLIAS" />
        </div>
      </Container>
    </div>
  )
}
