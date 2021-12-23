import {
  FaMedal,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  StyledAddress,
  StyledContact,
  HTMLFooter,
  StyledIconsWrapper,
  StyledLogoWrapper,
  StyledTopDiv,
  StyledWrapperLeft,
  StyledWrapperRight,
} from "./Footer.styled";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Link from "../Link/Link";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Footer(): JSX.Element {
  const topDivRef = useRef<HTMLDivElement | null>(null);
  const bottomDivRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const addressRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);

      let tlLeft = gsap.timeline({
        scrollTrigger: {
          trigger: logoRef.current,
          start: "bottom bottom",
        },
      });

      let tlRight = gsap.timeline({
        scrollTrigger: {
          trigger: logoRef.current,
          start: "bottom bottom",
        },
      });

      let topWidth = (topDivRef.current as HTMLDivElement).clientWidth;

      tlLeft.from(logoRef.current, {
        x: topWidth,
        duration: 2,
      });

      tlLeft.from(bottomDivRef.current, {
        y: 200,
        opacity: 0,
        duration: 1,
      });

      tlRight.from(addressRef.current, {
        x: 200,
        opacity: 0,
        duration: 1,
      });

      tlRight.from(contactRef.current, {
        x: 200,
        opacity: 0,
        duration: 1,
      });

      tlRight.from(iconsRef.current, {
        x: 200,
        opacity: 0,
        duration: 1,
      });
    }, 100);
  }, []);

  return (
    <HTMLFooter>
      <StyledWrapperLeft>
        <StyledTopDiv ref={topDivRef}>
          <hr />
          <StyledLogoWrapper ref={logoRef}>
            <span>ICPC Results</span>
            <FaMedal size="2rem" color="white" />
          </StyledLogoWrapper>
        </StyledTopDiv>
        <div className="bottom" ref={bottomDivRef}>
          <p>My company Inc &bull; All Rights reserved</p>
        </div>
      </StyledWrapperLeft>
      <StyledWrapperRight>
        <StyledAddress ref={addressRef}>
          <p>Spain, Barcelona</p>
          <p>Carrer de Rosa Sensat 9-11</p>
        </StyledAddress>

        <StyledContact ref={contactRef}>
          <Link href="#">
            <span>(34) 617-715-146</span>
          </Link>
          <span>&bull;</span>
          <Link href="#">
            <span>bthero09@gmail.com</span>
          </Link>
        </StyledContact>

        <StyledIconsWrapper ref={iconsRef}>
          <a href="https://www.facebook.com/">
            <FaFacebookSquare size="2rem" />
          </a>

          <a href="https://www.instagram.com/">
            <FaInstagramSquare size="2rem" />
          </a>

          <a href="https://twitter.com/">
            <FaTwitterSquare size="2rem" />
          </a>
        </StyledIconsWrapper>
      </StyledWrapperRight>
    </HTMLFooter>
  );
}
