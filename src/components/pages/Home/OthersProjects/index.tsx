import { CardDevelopedProjects } from "./components/CardDevelopedProjects"
import { Container, ContainerCards } from "./styles"
export const OthersProjects = () => {
  return (
    <div className="container">
      <Container>
        <h2>Others developed projects</h2>

        <ContainerCards>
          <CardDevelopedProjects
            link="https://acessounico.mec.gov.br/"
            jobTitle="Acesso Único"
            jobDescription=" Acesso Único, was a milestone in Brazils educational system. Check it
          out."
          />

          <CardDevelopedProjects
            link="https://acessounico.mec.gov.br/"
            jobTitle="ajudaAqui"
            jobDescription=" ajudaAqui is a plataform to request help and others things to your home, like fix wall plug, lights and others..."
          />
        </ContainerCards>
      </Container>
    </div>
  )
}
