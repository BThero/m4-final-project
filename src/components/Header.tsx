import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { FaMedal } from "react-icons/fa";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: var(--color-gray-900);
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    text-align: center;
    font-size: 2.5rem;
  }
`

const StyledFlag = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--color-gray-900);
  z-index: 1;
`

const StyledWrapper = styled.div`
  position: relative;
`

export default function Header() : JSX.Element {
  const headerRef = useRef<HTMLHeadingElement | null>(null)
  const flagRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let totalWidth = (headerRef.current as HTMLDivElement).clientWidth
    gsap.to(flagRef.current, {x: totalWidth, duration: 4, delay: 1})
  }, [])

  return (
    <StyledHeader>
      <StyledWrapper>
        <h1 ref={headerRef}>
          ICPC World Finals Results
        </h1>
        <StyledFlag ref={flagRef}>
          <FaMedal color="white" size="2.5rem"/>
        </StyledFlag>
      </StyledWrapper>
    </StyledHeader>
  )
}