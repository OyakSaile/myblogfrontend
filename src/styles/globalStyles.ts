import { createGlobalStyle } from "styled-components";
import { colors } from "./themes/colors";
export const GlobalStyle = createGlobalStyle`
:root {
    @media (max-width: 1080px) {
        html {
        font-size: 93.75%;
        }
      }

      @media (max-width: 720px) {
        html {
        font-size: 87.5%;
        }
      }
  }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

body {
  font-family: 'Poppins', sans-serif;
}

`;
