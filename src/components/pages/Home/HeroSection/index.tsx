import Image from "next/image"
import { Container, GroupButtons } from "./styles"
import { InstagramLogo, LinkedinLogo, Download } from "phosphor-react"
import { useConvertImageFromSanity } from "src/hooks/useConvertImageFromSanity"

interface HeroSectionProps {
  greetingText: string
  description: string
  profilePicture: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
  pdfUrl: string
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

export const HeroSection: React.FC<HeroSectionProps> = ({
  description,
  pdfUrl,
  greetingText,
  profilePicture,
  socialnetwork,
}) => {
  const { urlFor } = useConvertImageFromSanity()
  const teste = urlFor(socialnetwork[0].icon.asset._ref)

  return (
    <div className="container">
      <Container>
        <div>
          <h1>{greetingText}</h1>
          <h2>{description}</h2>

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
            <a download target="_blank" href={pdfUrl} rel="noreferrer">
              <button>
                <Download /> Resume
              </button>
            </a>
            <ul>
              {socialnetwork.map(({ _key, _type, icon, url }) => (
                <li key={_key}>
                  <a target="_blank" href={url} rel="noreferrer">
                    <Image
                      src={`${urlFor(icon.asset._ref)}`}
                      alt="teste"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </GroupButtons>
        </div>
        <div>
          <Image
            src={`${urlFor(profilePicture.asset._ref)}`}
            fill
            alt="KAYO eLIAS"
          />
        </div>
      </Container>
    </div>
  )
}
