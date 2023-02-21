import { colors } from "@styles/themes/colors"
import styled from "styled-components"

export const Container = styled.div`
  margin-top: 4rem;

  > h2 {
    color: ${colors.white};
    > span {
      color: #00ffb2;
    }
  }
`

export const LeftContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  margin: 5rem 0;
  > div {
    :first-child {
      height: 300px;
      width: 100%;
      &:hover {
        filter: brightness(0.8);
        cursor: pointer;
      }
    }

    position: relative;
    + div {
      text-align: right;
      color: ${colors.white};
      position: absolute;
      right: 2rem;
      > div {
        background-color: #5b39ae;
        width: 600px;
        padding: 2rem;
      }

      > p {
        margin-top: 1rem;
      }
    }
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    > div {
      margin: 3rem 0;
      + div {
        position: static;
        > div {
          width: 100%;
        }
      }
    }
  }
`

export const SecondFeatureProject = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  margin: 5rem 0;
  > div {
    :first-child {
      height: 300px;
      width: 100%;
      &:hover {
        filter: brightness(0.8);
        cursor: pointer;
      }
    }

    position: relative;
    + div {
      text-align: right;
      color: ${colors.white};
      position: absolute;
      right: 2rem;
      > div {
        background-color: #6cb346;
        width: 600px;
        padding: 2rem;
      }

      > p {
        margin-top: 1rem;
      }
    }
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    > div {
      margin: 3rem 0;
      + div {
        position: static;
        > div {
          width: 100%;
        }
      }
    }
  }
`
