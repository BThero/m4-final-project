import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-gray-900);
  color: white;
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }
`

export default function Header() : JSX.Element {
  return (
    <StyledHeader>
      <h1>
        ICPC World Finals Results
      </h1>
    </StyledHeader>
  )
}