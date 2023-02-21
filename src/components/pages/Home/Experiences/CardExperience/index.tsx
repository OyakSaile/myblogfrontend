import { Container, LinkContainer } from "./styles"
import Image from "next/image"
import CspTechLogo from "@icons/csp-tech.svg"
import { Link } from "phosphor-react"

interface CardExperienceProps {
  logo: any
  startDate: string
  endDate?: string
  isCurrentJob?: boolean
  colorBG?: string
  link?: string
  occupation: string
  occupationDescription: string
}
export const CardExperience: React.FC<CardExperienceProps> = ({
  logo,
  startDate,
  isCurrentJob,
  endDate,
  occupation,
  colorBG = "#232323",
  occupationDescription,
}) => {
  return (
    <Container colorBG={colorBG}>
      {logo}
      <h2>{occupation}</h2>
      <h3>
        {startDate} - {isCurrentJob ? <b>Present</b> : endDate}
      </h3>

      <p>{occupationDescription}</p>

      <LinkContainer>
        <Link size={40} />
      </LinkContainer>
    </Container>
  )
}
