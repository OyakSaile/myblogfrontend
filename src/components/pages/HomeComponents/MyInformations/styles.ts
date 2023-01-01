import styled from "styled-components";

export const DivText = styled.div`
  position: relative;
  > div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 40%;
    width: 100%;
    z-index: 9999;

    > h1 {
      font-weight: 900;
      font-size: 6rem;
    }
    > h2 {
      font-size: 2rem;
      margin: 0;
      padding: 0;
      line-height: 20px;
    }

    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      gap: 0.5rem;
    }

    > button {
      background: transparent;
      border: 0;
    }
  }
`;
