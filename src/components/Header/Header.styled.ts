import styled from "styled-components"

export const H1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`

export const HTMLHeader = styled.header`
  background-color: var(--color-bg);
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`

export const StyledFlag = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--color-bg);
  z-index: 1;
`

export const StyledWrapper = styled.div`
  position: relative;
`