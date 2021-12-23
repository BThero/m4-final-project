import { StyledWrapperRight, StyledWrapperLeft, StyledMission } from "./Mission.styled";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import Link from "../Link/Link";

export default function Mission() : JSX.Element {
  let headingLeftRef = useRef<(HTMLHeadingElement | null)>(null)
  let headingRightRef = useRef<(HTMLHeadingElement | null)>(null)
  let firstParagraphRef = useRef<(HTMLParagraphElement | null)>(null)
  let secondParagraphRef = useRef<(HTMLParagraphElement | null)>(null)
  let horizontalRuleRef = useRef<(HTMLHRElement | null)>(null)
  let cursorRef = useRef<(HTMLSpanElement | null)>(null)
  let headingWrapperRef = useRef<(HTMLDivElement | null)>(null)
  let imageRef = useRef<HTMLDivElement | null>(null)
  let linkRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    let headingLeftElement = headingLeftRef.current as HTMLHeadingElement
    let headingRightElement = headingRightRef.current as HTMLHeadingElement

    let headingWidth = (headingWrapperRef.current as HTMLDivElement).clientWidth

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingLeftElement,
        start: "bottom bottom"
      }
    })

    headingLeftElement.textContent = ''
    headingRightElement.textContent = ''

    tl.to(headingLeftElement, {
      duration: 1,
      text: {
        value: 'Never forget ',
        preserveSpaces: true
      },
      ease: 'none'
    }).to(headingRightElement, {
      duration: 1,
      text: 'the nerds',
      ease: 'none'
    }).to(headingRightElement, {
      duration: 1,
      text: '',
      ease: 'none'
    }).to(headingRightElement, {
      duration: 1,
      text: 'the coders',
      ease: 'none'
    }).to(headingRightElement, {
      duration: 1,
      text: '',
      ease: 'none'
    }).to(headingRightElement, {
      duration: 1.5,
      text: {
        value: 'the legends',
        newClass: 'highlight',
        type: 'diff'
      },
      ease: 'none'
    }).to(cursorRef.current, {
      duration: 0.5,
      opacity: 0
    }).fromTo(horizontalRuleRef.current, {
      visibility: 'hidden',
      x: -100,
      opacity: 1,
      duration: 1.5
    }, {
      visibility: 'visible',
      x: headingWidth,
      opacity: 0,
      duration: 1.5
    }).from(firstParagraphRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
    }).from(secondParagraphRef.current, {
      y: 200,
      opacity: 0,
      duration: 1,
    }, "<").from(imageRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
    }, "<").fromTo(linkRef.current, {
      y: 200, 
      opacity: 0,
      duration: 1,
      visibility: 'hidden'
    }, {
      visibility: 'visible',
      y: 0,
      opacity: 1,
      duration: 1,
    })
  })

  return (
    <StyledMission>
      <StyledWrapperLeft>
        <div ref={headingWrapperRef}>
          <h2 ref={headingLeftRef}>Never forget</h2>
          <h2 ref={headingRightRef}>the legends</h2>
          <span ref={cursorRef}>|</span>
        </div>

        <hr ref={horizontalRuleRef} />
        <p ref={firstParagraphRef}>
          The <strong>International Collegiate Programming Contest</strong>, known as the ICPC, is an annual multi-tiered competitive programming competition among the universities of the world.
          The ICPC traces its roots to a competition held at Texas A&amp;M University in 1970 and there is no denying that it played an enormous role in the development and popularization of competitive programming.
        </p>
        <p ref={secondParagraphRef}>
          However, most of images, scoreboards and participant names have been either lost or forgotten by the community. <strong>We believe that heroes deserve to be known by public</strong>, thus it motivated us to create this wonderful resource and make an effort to preserve history.
        </p>

        <Link href="https://icpc.global/" ref={linkRef} offset='1rem'>
          <span>Learn more</span>
          <FaArrowRight size={'1.5rem'}/>
        </Link>
      </StyledWrapperLeft>
      <StyledWrapperRight ref={imageRef}>

      </StyledWrapperRight>
    </StyledMission>
  )
}