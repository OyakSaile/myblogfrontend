import { colors } from "@styles/themes/colors"
import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  background-color: black;

  > div {
    margin-top: 1.5rem;
    > h2 {
      margin-bottom: 4.4375rem;
      color: white;
      font-size: 4rem;
    }
    > h3 {
      color: ${colors.white};
    }
    > p {
      color: ${colors.white};
    }
  }
`
