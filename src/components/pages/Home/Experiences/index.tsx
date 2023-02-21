import { CardExperience } from "./CardExperience"
import { Container } from "./styles"
import ObraShowLogo from "@icons/obra-show.svg"
import CspTechLogo from "@icons/csp-tech.svg"
import GtechVirtualLogo from "@icons/gtech-virtual.svg"

export const Experiences: React.FC = () => {
  return (
    <div className="container">
      <Container>
        <h1>Experiences</h1>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <a
              href="https://www.csptech.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <CardExperience
                startDate="April 2022"
                isCurrentJob
                logo={<CspTechLogo />}
                occupation="Front-End Developer"
                occupationDescription="Currently as Front-End Mid-level and UI/UX Developer. Elaborating several interfaces using ReactJS, TypeScript and much more. Also developing interfaces for SharePoint and other platforms.
                "
              />
            </a>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <a
              href="https://www.obrashow.com.br/inicio"
              rel="noreferrer"
              target="_blank"
            >
              <CardExperience
                startDate="August 2021"
                endDate="January 2022 "
                colorBG="#0060A9"
                logo={<ObraShowLogo />}
                occupation="Front-End Developer"
                occupationDescription="I worked as a developer, creating new features for the project, optimizing codes for better performance in search engines and also producing layouts that enabled a better user experience.
                Technologies Used: Ionic, TypeScript, Angular, SASS/CSS"
              />
            </a>
          </div>
          <div className=" col-sm-12 col-md-12 col-lg-4">
            <a
              href="https://gtechvirtual.com/"
              target="_blank"
              rel="noreferrer"
            >
              <CardExperience
                startDate="November 2020"
                endDate="August 2021 "
                logo={<GtechVirtualLogo />}
                occupation="Front-End Developer"
                occupationDescription="During my time at the company, I worked with the maintenance and development of websites and also with UI/UX."
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
