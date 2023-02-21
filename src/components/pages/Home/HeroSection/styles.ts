import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  background-position: center center;

  > div {
    position: relative;
    z-index: 3;
    > h1 {
      font-size: 3rem;
      font-family: "Source Code Pro", monospace;
    }

    > h2 {
      font-size: 1.5rem;
      color: #808b92;
    }

    > ul {
      padding: 0;
      list-style: none;
      display: flex;
      gap: 1rem;

      > li {
        font-weight: bold;
      }
    }

    :not(:first-child) {
      position: relative;
      height: 500px;
      width: 500px;
      > img {
        border-radius: 50%;
      }
    }
  }

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
      > h1 {
        font-size: 1.5rem;
      }

      > h2 {
        font-size: 1rem;
        color: #808b92;
      }

      > ul {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      :not(:first-child) {
        position: relative;
        margin-top: 1rem;
        width: 300px;
        height: 304px;
        > img {
          border-radius: 50%;
          max-width: 100%;
        }
      }
    }
  }
`

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  > button {
    min-width: 161px;
    height: 49px;
    border-radius: 25px;
    background: black;
    color: white;
    transition: all 0.2s;
    &:hover {
      filter: brightness(0.2);
    }
  }

  > ul {
    display: flex;
    gap: 0.8rem;
    list-style: none;
    padding: 0;
    margin: 0;

    > li {
      display: flex;
      padding: 13px;
      border: 1px solid #f8f8f8;
      box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      transition: all 0.4s;

      :hover {
        filter: brightness(0.8);
        background-color: black;
        color: white;
        cursor: pointer;
      }
      > a {
        color: currentColor;
      }
    }
  }
`
