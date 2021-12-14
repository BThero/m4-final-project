import { MutableRefObject, SyntheticEvent, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Slide from "./Slide"
import { SlideProps } from "./types"

const StyledCarousel = styled.section`
  margin: 3rem auto;
  /* overflow: hidden; */
  width: 50vw;
  position: relative;
  /* height: calc(50vw * 2 / 3); */

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    border: 0;
    border-radius: 0;
    background-color: transparent;
  }

  .left {
    left: 0;    
  }

  .right {
    right: 0;
  }
`

const StyledSlideshow = styled.div`
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

  let currentIndex : number = 0
  let animationEase : string = 'cubic-bezier(0.33, 1, 0.68, 1)'
  let animationTiming : number = 0.7

  useEffect(() => {
    refreshSlideshow(true)
  })

  function automaticSlideshow() {
    setTimeout(() => {
      refreshSlideshow(false)
      automaticSlideshow()
    }, 5000)
  }

  function refreshSlideshow(initial : boolean) {
    if (initial === false) {
      (buttonLeftRef.current as HTMLButtonElement).disabled = true;
      (buttonRightRef.current as HTMLButtonElement).disabled = true;
    }

    for (let i = 0; i < list.length; i++) {
      let element = listRefs[i].current as HTMLDivElement; 
      element.setAttribute('style', 'display: none; opacity: 0%; z-index: 0;')
    }

    let prevIndex = (currentIndex + list.length - 1) % list.length
    let nextIndex = (currentIndex + 1) % list.length

    let curElement = listRefs[currentIndex].current as HTMLDivElement
    let prevElement = listRefs[prevIndex].current as HTMLDivElement
    let nextElement = listRefs[nextIndex].current as HTMLDivElement

    curElement.setAttribute('style', `
      transform: translateX(0);
      opacity: 100%;
      z-index: 1;
      transition: transform 1s ${animationEase}, opacity 1s linear;
    `)

    prevElement.setAttribute('style', `
      transform: translateX(-70%); 
      opacity: 50%;
      transition: 
        transform ${initial === true ? 0 : animationTiming}s ${animationEase}, 
        opacity ${initial === true ? 0 : animationTiming}s linear;
    `)

    nextElement.setAttribute('style', `
      transform: translateX(70%);
      opacity: 50%; 
      transition: 
        transform ${initial === true ? 0 : animationTiming}s ${animationEase}, 
        opacity ${initial === true ? 0 : animationTiming}s linear;
    `)

    setTimeout(() => {
      (buttonLeftRef.current as HTMLButtonElement).disabled = false;
      (buttonRightRef.current as HTMLButtonElement).disabled = false;
    }, (animationTiming + 0.2) * 1000)
  }

  function handleClickRight(event : SyntheticEvent) { 
    event.preventDefault();
    currentIndex = (currentIndex + 1) % list.length
    refreshSlideshow(false)
  }

  function handleClickLeft(event : SyntheticEvent) {
    event.preventDefault();
    currentIndex = (currentIndex + list.length - 1) % list.length
    refreshSlideshow(false)
  }

  return (
    <StyledCarousel>
      <StyledSlideshow>
        {
          list.map((li, idx) => {
            return (
              <Slide {...li} ref={listRefs[idx]}/>
            )
          })
        }
      </StyledSlideshow>
      <button className="left" ref={buttonLeftRef} onClick={handleClickLeft}>Left</button>
      <button className="right" ref={buttonRightRef} onClick={handleClickRight}>Right</button>
    </StyledCarousel>
  )
}