import { colors } from "@styles/themes/colors"
import styled from "styled-components"

export const Container = styled.div`
  margin-top: 3rem;
  a {
    text-decoration: none;
    color: ${colors.black.fullBlack};

    > h2 {
      color: ${colors.black};
    }
  }
`
