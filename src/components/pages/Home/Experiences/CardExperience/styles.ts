import styled from "styled-components"

export const Container = styled.div<{ colorBG: string }>`
  background-color: ${(props) => props.colorBG};
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 500px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    filter: brightness(0.8);
  }

  > h2 {
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  > h3 {
    font-size: 1rem;
  }

  > p {
    font-size: 1rem;
  }
`

export const LinkContainer = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 1rem;
`
