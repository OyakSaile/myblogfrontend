import { FeaturedProjects } from "./components/FeaturedProjects"
import { Container } from "./styles"

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
          I&apos;m 22 years old, living in brazil, my favorite hobby is <br />{" "}
          play some games or create new crazy idea.
        </p>
        <FeaturedProjects />
      </div>
    </Container>
  )
}
