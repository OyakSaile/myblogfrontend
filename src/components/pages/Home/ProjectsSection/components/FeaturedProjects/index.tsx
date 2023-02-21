import Image from "next/image"
import { Container, LeftContainer, SecondFeatureProject } from "./styles"
export const FeaturedProjects = () => {
  return (
    <Container>
      <h2>
        Featured <span>Projects</span>
      </h2>

      <LeftContainer>
        <div>
          <a href="https://ritasaude.com.br/" target="_blank" rel="noreferrer">
            <Image src="/rita-saude.png" alt="Rita Saúde" fill />
          </a>
        </div>
        <div>
          <h2>Rita Saúde</h2>
          <div>
            More than an app, Rita is a digital health solution that will
            simplify the contact and relationship between patients and health
            professionals, taking care of their well-being in a modern and
            efficient way.
          </div>
          <p>ReactJS NodeJS Express TypeScript Axios</p>
        </div>
      </LeftContainer>

      <SecondFeatureProject>
        <div>
          <a href="https://lab-rj.com.br/" target="_blank" rel="noreferrer">
            <Image src="/lab-rj.png" alt="Lab-RJ" fill />
          </a>
        </div>
        <div>
          <h2>Lab Academy</h2>
          <div>
            More than an app, Rita is a digital health solution that will
            simplify the contact and relationship between patients and health
            professionals, taking care of their well-being in a modern and
            efficient way.
          </div>
          <p>ReactJS NodeJS Express TypeScript Axios</p>
        </div>
      </SecondFeatureProject>
    </Container>
  )
}
