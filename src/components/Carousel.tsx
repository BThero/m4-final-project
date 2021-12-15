import { MutableRefObject, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Slide from "./Slide"
import { SlideProps } from "./types"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { gsap, Power4 } from "gsap"
import getData from './CarouselData'

const StyledCarousel = styled.section`
  background-color: var(--color-gray-700);
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  position: relative;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    border: 0;
    border-radius: 0;
    background-color: transparent;
  }

  button:hover svg {
    transform: scale(1.2);
  }

  button[disabled] svg {
    fill: darkgrey;
  }

  .left {
    left: 5rem;    
  }

  .right {
    right: 5rem;
  }
`

const StyledSlideshow = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 50vw;
  height: calc(50vw * 2 / 3);
`

const StyledHeader = styled.header`
  margin-bottom: 6rem;
  font-size: 2.5rem;
  color: white;
  text-align: center;
`

export default function Carousel() : JSX.Element {
  const [list] = useState<SlideProps[]>(getData())
  const [listRefs] = useState<MutableRefObject<HTMLDivElement | null>[]>([
    useRef<(HTMLDivElement | null)>(null),
    useRef<(HTMLDivElement | null)>(null),
    useRef<(HTMLDivElement | null)>(null),
    useRef<(HTMLDivElement | null)>(null),
    useRef<(HTMLDivElement | null)>(null)
  ])

  const buttonLeftRef = useRef<(HTMLButtonElement | null)>(null);
  const buttonRightRef = useRef<(HTMLButtonElement | null)>(null);
  const headerRef = useRef<(HTMLDivElement | null)>(null);

  const animationTiming : number = 1.5
  let curIndex : number = 0
  let slideshowTimer: NodeJS.Timeout | null = null

  useEffect(() => {
    refreshSlideshow(0);

    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 2
    })
  }, [])

  function refreshSlideshow(direction : number) {
    if (slideshowTimer !== null) {
      clearTimeout(slideshowTimer)
    }

    if (slideshowTimer !== null) {
      clearTimeout(slideshowTimer)
    }

    slideshowTimer = setTimeout(() => {
      curIndex = (curIndex + 1) % list.length
      refreshSlideshow(1)
    }, 10000)

    let prevIndex = (curIndex + list.length - 1) % list.length;
    let nextIndex = (curIndex + 1) % list.length;
    
    (buttonLeftRef.current as HTMLButtonElement).disabled = true;
    (buttonRightRef.current as HTMLButtonElement).disabled = true;

    for (let i = 0; i < list.length; i++) {
      let element = listRefs[i].current as HTMLDivElement; 
      element.removeEventListener('click', handleClickRight)
      element.removeEventListener('click', handleClickLeft)
      element.setAttribute('style', 'opacity: 0;')
    }

    let curElement = listRefs[curIndex].current as HTMLDivElement
    let prevElement = listRefs[prevIndex].current as HTMLDivElement
    let nextElement = listRefs[nextIndex].current as HTMLDivElement

    let headingText = curElement.querySelector('h1')
    let supportingText = curElement.querySelector('p')
    let tl = gsap.timeline()

    tl.to(curElement, {
      xPercent: 0,
      scale: 1.1,
      opacity: 1,
      zIndex: 1,
      duration: animationTiming,
      ease: Power4.easeOut
    }).from(headingText, {
      y: 100,
      opacity: 0,
      duration: 0.7,
    }).from(supportingText, {
      y: 100,
      opacity: 0,
      duration: 0.7,
    }, "<")
    
    gsap.to(prevElement, {
      xPercent: -70,
      scale: 0.8,
      opacity: 0.5,
      duration: animationTiming,
      ease: Power4.easeOut,
    })

    gsap.to(nextElement, {
      xPercent: 70,
      scale: 0.8,
      opacity: 0.5,
      duration: animationTiming,
      ease: Power4.easeOut,
    })

    setTimeout(() => {
      (buttonLeftRef.current as HTMLButtonElement).disabled = false;
      (buttonRightRef.current as HTMLButtonElement).disabled = false;
    }, (animationTiming + 0.1) * 1000)
  }

  function handleClickRight(event : any) { 
    event.preventDefault();

    if (buttonRightRef.current?.disabled === true) {
      return
    }

    curIndex = (curIndex + 1) % list.length
    refreshSlideshow(1)
  }

  function handleClickLeft(event : any) {
    event.preventDefault();

    if (buttonLeftRef.current?.disabled === true) {
      return
    }

    curIndex = (curIndex + list.length - 1) % list.length
    refreshSlideshow(-1)
  }

  return (
    <StyledCarousel>
      <StyledHeader ref={headerRef}>
        <h1>
          See the history
        </h1>
      </StyledHeader>
      <StyledSlideshow>
        {
          list.map((li, idx) => {
            return (
              <Slide {...li} ref={listRefs[idx]} />
            )
          })
        }
      </StyledSlideshow>

      <button className="left" ref={buttonLeftRef} onClick={handleClickLeft}>
        <FaChevronLeft color="white" size="4rem"/>
      </button>

      <button className="right" ref={buttonRightRef} onClick={handleClickRight}>
        <FaChevronRight color="white" size="4rem"/>
      </button>
    </StyledCarousel>
  )
}