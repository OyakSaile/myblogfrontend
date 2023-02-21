import { colors } from "@styles/themes/colors"
import styled from "styled-components"

export const Container = styled.div`
  margin: 8rem 0;
  min-height: 100vh;

  > h2 {
    color: ${colors.black};
  }
`

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`
