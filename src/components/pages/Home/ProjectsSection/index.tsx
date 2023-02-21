import { Container } from "./styles"
import ObraShowLogo from "@icons/obra-show.svg"
import CspTechLogo from "@icons/csp-tech.svg"
import GtechVirtualLogo from "@icons/gtech-virtual.svg"

export const ProjectsSection: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <h2>
          I love to create something
          <br /> simple and clean.
        </h2>
        <h3>About me</h3>{" "}
        <p>
          I&apos;m 22 years old, living in brazil, my favorite hobby play some
          games or create new crazy idea.
        </p>
      </div>
    </Container>
  )
}
