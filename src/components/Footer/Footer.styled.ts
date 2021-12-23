import styled from "styled-components"

export const HTMLFooter = styled.footer`
  background-color: var(--color-bg);
  color: var(--color-gray-300);
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledWrapperLeft = styled.div`
  color: white;
`

export const StyledLogoWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: left;
  background-color: var(--color-bg);

  span {
    font-size: 2.5rem;
    font-weight: 700;
  }
`

export const StyledTopDiv = styled.div`
  position: relative;
  width: 25vw;
  overflow: hidden;

  hr {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    border-color: white;
    background-color: white;
  }
`

export const StyledWrapperRight = styled.div`
  .address {
    margin-bottom: 0.5rem;
  }
`

export const StyledIconsWrapper = styled.div`
  a {
    color: var(--color-gray-300);
  }

  & svg {
    margin-right: 1rem;
    transform: scale(1.0);
    transition: transform 0.25s linear;
  }

  & svg:hover {
    transform: scale(1.2);
    transition: transform 0.25s linear;
    color: white;
  }
`

export const StyledAddress = styled.div`
  margin-bottom: 0.5rem;
`

export const StyledContact = styled.div`
  margin-bottom: 0.5rem;
  display: flex;

  & > span {
    margin: 0 0.25rem;
    align-self: stretch;
  }
`