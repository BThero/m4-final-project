import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StyledMission = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: var(--color-gray-900);
  color: white;
  padding: 3rem;
`

const StyledWrapperLeft = styled.div`
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
    border-color: white;
    margin-bottom: 1rem;
    margin-right: 3rem;
    width: 100px;
    z-index: -1;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    line-height: 1.4;
  }

  span.highlight {
    color: lightpink;
  }
`

const StyledWrapperRight = styled.div`
  width: 35vw;
  height: calc(35vw * 4 / 3);
  background: url('/assets/tourist.jpeg') no-repeat center center; 
  background-size: cover;
`

export default function Mission() : JSX.Element {
  let headingLeftRef = useRef<(HTMLHeadingElement | null)>(null)
  let headingRightRef = useRef<(HTMLHeadingElement | null)>(null)
  let firstParagraphRef = useRef<(HTMLParagraphElement | null)>(null)
  let secondParagraphRef = useRef<(HTMLParagraphElement | null)>(null)
  let horizontalRuleRef = useRef<(HTMLHRElement | null)>(null)
  let cursorRef = useRef<(HTMLSpanElement | null)>(null)
  let headingWrapperRef = useRef<(HTMLDivElement | null)>(null)

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    let headingLeftElement = headingLeftRef.current as HTMLHeadingElement
    let headingRightElement = headingRightRef.current as HTMLHeadingElement
    let firstParagraphElement = firstParagraphRef.current as HTMLParagraphElement
    let secondParagraphElement = secondParagraphRef.current as HTMLParagraphElement
    let horizontalRuleElement = horizontalRuleRef.current as HTMLHRElement

    let headingWidth = (headingWrapperRef.current as HTMLDivElement).clientWidth

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingLeftElement,
        start: "top bottom"
      }
    })

    let cursorTl = gsap.timeline()
    cursorTl.repeat(20).yoyo(true)

    cursorTl.to(cursorRef.current, {
      opacity: 0,
      duration: 1
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
    })

    tl.fromTo(horizontalRuleElement, {
      x: -200,
      opacity: 1,
      duration: 1.5
    }, {
      x: headingWidth,
      opacity: 0,
      duration: 1.5
    })

    tl.from(firstParagraphElement, {
      x: -200,
      opacity: 0,
      duration: 1
    })

    tl.from(secondParagraphElement, {
      y: 200,
      opacity: 0,
      duration: 1
    }, "<")
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
          The International Collegiate Programming Contest, known as the ICPC, is an annual multi-tiered competitive programming competition among the universities of the world.
          The ICPC traces its roots to a competition held at Texas A&amp;M University in 1970 and there is no denying that it played an enormous role in the development and popularization of competitive programming.
        </p>
        <p ref={secondParagraphRef}>
          However, most of images, scoreboards and participant names have been either lost or forgotten by the community. We believe that heroes deserve for the public to know their names, thus it motivated us to create this wonderful resource and make an effort to preserve history.
        </p>
      </StyledWrapperLeft>
      <StyledWrapperRight>

      </StyledWrapperRight>
    </StyledMission>
  )
}