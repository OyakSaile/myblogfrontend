import { colors } from "@styles/themes/colors";
import styled from "styled-components";

export const Container = styled.header`
  height: 100%;
  width: 5rem;
  background-color: ${colors.white};
  border-right: 1px solid ${colors.black.fullBlack};
  display: flex;
  justify-content: center;
  transition: all ease 0.3s;

  &.openMenu {
    width: 10rem;
  }

  > button {
    background-color: transparent;
    width: fit-content;
    height: fit-content;
    border: 0;
  }
`;
