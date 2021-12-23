import { StyledWrapper, StyledFlag, HTMLHeader, H1 } from "./Header.styled";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { FaMedal } from "react-icons/fa";

export default function Header(): JSX.Element {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const flagRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let totalWidth = (headerRef.current as HTMLDivElement).clientWidth;
    gsap.to(flagRef.current, { x: totalWidth, duration: 4, delay: 1 });
  }, []);

  return (
    <HTMLHeader>
      <StyledWrapper>
        <H1 ref={headerRef}>ICPC World Finals Results</H1>
        <StyledFlag ref={flagRef}>
          <FaMedal color="white" size="2.5rem" />
        </StyledFlag>
      </StyledWrapper>
    </HTMLHeader>
  );
}
