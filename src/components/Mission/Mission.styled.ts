import styled from "styled-components"

export const StyledMission = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--color-gray-900);
  color: white;
  padding: 3rem;
`

export const StyledWrapperLeft = styled.div`
  flex: 1;
  margin-right: 2rem;

  h2 {
    white-space: pre;
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  span {
    font-size: 3.5rem;
    opacity: 1;
  }

  hr {
    visibility: hidden;
    border-color: white;
  }

  & > hr {
    margin-bottom: 1rem;
    margin-right: 3rem;
    width: 100px;
  }

  p {
    color: var(--color-gray-300);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    line-height: 1.4;
  }

  a {
    color: var(--color-rose-300);
  }

  a span {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    vertical-align: 0.25rem;
  }

  span.highlight {
    color: var(--color-rose-300);
  }
`

export const StyledWrapperRight = styled.div`
  width: 35vw;
  height: calc(35vw * 4 / 3);
  background: url(${process.env.PUBLIC_URL}/assets/tourist.jpeg) no-repeat center center; 
  background-size: cover;
`