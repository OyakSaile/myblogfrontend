import ArrowRight from "@icons/arrow-right.svg";
import GitHubIcon from "@icons/github.svg";
import LinkedinIcon from "@icons/linkedin.svg";
import InstagramIcon from "@icons/instagram.svg";
import { DivText } from "./styles";
import Link from "next/link";

export const MyInformations: React.FC = () => {
  return (
    <DivText>
      <div>
        <h2>Full-Stack Developer</h2>
        <h1>Kayo Elias</h1>
        <p>
          I have passion to create a new solutions and the creative process
          behind the code. My main tech is : ReactJS or NextJS and your stack.
        </p>
        <span>
          <ul>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/kayoeliasgverdan/"
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/kayoskada/"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/OyakSaile"
              >
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </span>
        <Link href="/aboutme">
            <ArrowRight />
        </Link>
      </div>
    </DivText>
  );
};
