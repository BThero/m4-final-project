import { MutableRefObject, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Slide from "./Slide"
import { SlideProps } from "./types"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { gsap, Power4 } from "gsap"

const StyledCarousel = styled.section`
  background-color: var(--color-gray-700);
  padding: 10rem 0;
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
    transform: scale(1.1);
  }

  button[disabled] svg {
    fill: darkgrey;
  }

  .left {
    left: 0;    
  }

  .right {
    right: 0;
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

export default function Carousel() : JSX.Element {
  const [list] = useState<SlideProps[]>([
    {
      imageUrl: "/assets/2016-winners.jpeg",
      heading: "Finals 2016",
      description: "May 15-20, Phuket"
    },
    {
      imageUrl: "/assets/2017-winners.jpeg",
      heading: "Finals 2017",
      description: "May 20-25, Rapid City"
    },
    {
      imageUrl: "/assets/2018-winners.jpeg",
      heading: "Finals 2018",
      description: "April 15-20, Peking University"
    },
    {
      imageUrl: "/assets/2019-winners.jpeg",
      heading: "Finals 2019",
      description: "March 31 - April 5, Porto"
    },
    {
      imageUrl: "/assets/2020-winners.jpeg",
      heading: "Finals 2020",
      description: "October 1-5, Moscow (2021)"
    }
  ])

  const listRefs : MutableRefObject<HTMLDivElement | null>[] = [
    useRef<(HTMLDivElement | null)>(null),
    useRef<(HTMLDivElement | null)>(null),
    useRef<(HTMLDivElement | null)>(null),
    useRef<(HTMLDivElement | null)>(null),
    useRef<(HTMLDivElement | null)>(null)
  ];

  const buttonLeftRef = useRef<(HTMLButtonElement | null)>(null);
  const buttonRightRef = useRef<(HTMLButtonElement | null)>(null);

  const animationTiming : number = 1.5
  let curIndex = 0
  let slideshowTimer: NodeJS.Timeout | null = null

  useEffect(() => {
    refreshSlideshow(0);
  }, [])

  function refreshSlideshow(direction : number) {
    if (slideshowTimer) {
      clearInterval(slideshowTimer as NodeJS.Timeout)
    }

    slideshowTimer = setTimeout(() => {
      curIndex = (curIndex + 1) % list.length
      refreshSlideshow(1)
    }, 5000)

    let prevIndex = (curIndex + list.length - 1) % list.length;
    let nextIndex = (curIndex + 1) % list.length;
    
    (buttonLeftRef.current as HTMLButtonElement).disabled = true;
    (buttonRightRef.current as HTMLButtonElement).disabled = true;

    for (let i = 0; i < list.length; i++) {
      let element = listRefs[i].current as HTMLDivElement; 
      element.removeEventListener('click', handleClickRight)
      element.removeEventListener('click', handleClickLeft)
      
      gsap.to(element, {
        opacity: 0,
        duration: 0
      })
    }

    let curElement = listRefs[curIndex].current as HTMLDivElement
    let prevElement = listRefs[prevIndex].current as HTMLDivElement
    let nextElement = listRefs[nextIndex].current as HTMLDivElement

    curElement.removeAttribute('style')
    prevElement.removeAttribute('style')
    nextElement.removeAttribute('style')

    prevElement.addEventListener('click', handleClickLeft)
    nextElement.addEventListener('click', handleClickRight)

    let headingText = curElement.querySelector('h1')
    let supportingText = curElement.querySelector('p')
    let tl = gsap.timeline()

    tl.to(curElement, {
      xPercent: 0,
      scale: 1,
      opacity: 1,
      zIndex: 1,
      duration: animationTiming,
      ease: Power4.easeOut
    })

    tl.from(headingText, {
      y: 100,
      opacity: 0,
      duration: 0.7,
    })

    tl.from(supportingText, {
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
    if (buttonRightRef.current?.disabled === true) {
      return
    }

    event.preventDefault();
    curIndex = (curIndex + 1) % list.length
    refreshSlideshow(1)
  }

  function handleClickLeft(event : any) {
    if (buttonLeftRef.current?.disabled === true) {
      return
    }

    event.preventDefault();
    curIndex = (curIndex + list.length - 1) % list.length
    refreshSlideshow(-1)
  }

  return (
    <StyledCarousel>
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
        <FaChevronLeft color="white" size="3rem"/>
      </button>

      <button className="right" ref={buttonRightRef} onClick={handleClickRight}>
        <FaChevronRight color="white" size="3rem"/>
      </button>
    </StyledCarousel>
  )
}