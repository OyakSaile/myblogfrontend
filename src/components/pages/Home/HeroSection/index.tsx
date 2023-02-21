import Image from "next/image"
import { Container, GroupButtons } from "./styles"
import { InstagramLogo, LinkedinLogo, Download } from "phosphor-react"

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
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                ReactJS
              </a>
            </li>
            <li>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                Typescript
              </a>
            </li>
            <li>
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                NextJS
              </a>
            </li>

            <li>
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                NodeJS
              </a>
            </li>

            <li>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                Javascript
              </a>
            </li>
          </ul>

          <GroupButtons>
            <button>
              <Download /> Resume
            </button>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/kayoskada/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo size={24} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/kayoeliasgverdan/"
                  rel="noreferrer"
                >
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
