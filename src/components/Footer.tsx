import styled from "styled-components";
import { FaMedal, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Link from "./Link";
import ScrollTrigger from "gsap/ScrollTrigger";

const StyledFooter = styled.footer`
  background-color: var(--color-bg);
  color: var(--color-gray-300);
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledWrapperLeft = styled.div`
  
`

const StyledLogoWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: left;
  background-color: var(--color-bg);

  span {
    font-size: 2.5rem;
    font-weight: 700;
  }
`

const StyledTopDiv = styled.div`
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

const StyledWrapperRight = styled.div`
  .address {
    margin-bottom: 0.5rem;
  }
`

const StyledIconsWrapper = styled.div`
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

const StyledAddress = styled.div`
  margin-bottom: 0.5rem;
`

const StyledContact = styled.div`
  margin-bottom: 0.5rem;
  display: flex;

  & > span {
    margin: 0 0.25rem;
    align-self: stretch;
  }
`

export default function Footer() : JSX.Element {
  const topDivRef = useRef<HTMLDivElement | null>(null)
  const bottomDivRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLDivElement | null>(null)
  const addressRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)
  const iconsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger)

      let tlLeft = gsap.timeline({
        scrollTrigger: {
          trigger: logoRef.current,
          start: "bottom bottom"
        }
      })

      let tlRight = gsap.timeline({
        scrollTrigger: {
          trigger: logoRef.current,
          start: "bottom bottom"
        }
      })

      let topWidth = (topDivRef.current as HTMLDivElement).clientWidth;

      tlLeft.from(logoRef.current, {  
        x: topWidth, 
        duration: 2
      })

      tlLeft.from(bottomDivRef.current, {
        y: 200,
        opacity: 0,
        duration: 1
      })

      tlRight.from(addressRef.current, {
        x: 200,
        opacity: 0,
        duration: 1
      })

      tlRight.from(contactRef.current, {
        x: 200,
        opacity: 0,
        duration: 1
      })

      tlRight.from(iconsRef.current, {
        x: 200,
        opacity: 0,
        duration: 1
      })
    }, 1000)
  }, [])

  return (
    <StyledFooter>
      <StyledWrapperLeft> 
        <StyledTopDiv ref={topDivRef}>
          <hr />
          <StyledLogoWrapper ref={logoRef}> 
            <span>ICPC Results</span>
            <FaMedal size="2rem" color="white" />
          </StyledLogoWrapper>
        </StyledTopDiv>
        <div className="bottom" ref={bottomDivRef}>
          <p>
            My company Inc &bull; All Rights reserved
          </p>
        </div>
      </StyledWrapperLeft>
      <StyledWrapperRight>
        <StyledAddress ref={addressRef}>
          <p>Spain, Barcelona</p>
          <p>Carrer de Rosa Sensat 9-11</p>
        </StyledAddress>

        <StyledContact ref={contactRef}>
          <Link href="#">
            <span>
              (34) 617-715-146
            </span>
          </Link>
          <span>&bull;</span>
          <Link href="#">
            <span>
              bthero09@gmail.com
            </span>
          </Link>
        </StyledContact>

        <StyledIconsWrapper ref={iconsRef}>
          <a href="https://www.facebook.com/">
            <FaFacebookSquare size='2rem' />
          </a>

          <a href="https://www.instagram.com/">
            <FaInstagramSquare size='2rem' />
          </a>

          <a href="https://twitter.com/">
            <FaTwitterSquare size='2rem' />
          </a>
        </StyledIconsWrapper>
      </StyledWrapperRight>
    </StyledFooter>
  )
}