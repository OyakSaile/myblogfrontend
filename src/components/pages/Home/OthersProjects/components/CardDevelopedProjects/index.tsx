import { Link } from "phosphor-react"
import { Container } from "./styles"

interface CardDevelopedProps {
  jobTitle: string
  jobDescription: string
  link: string
}
export const CardDevelopedProjects: React.FC<CardDevelopedProps> = ({
  jobDescription,
  jobTitle,
  link,
}) => {
  return (
    <Container>
      <a href={link} target="_blank" rel="noreferrer">
        <h2>{jobTitle}</h2>
        <p>{jobDescription}</p>
        <Link size={24} />
      </a>
    </Container>
  )
}
