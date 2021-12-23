import { useEffect, useRef, useState } from "react";
import { Section, Header, Div, Button, H2 } from "./Carousel.styled";
import Slide from "./Slide/Slide";
import { SlideProps } from "../../common/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap, Power4 } from "gsap";
import getData from "../../common/CarouselData";

export default function Carousel(): JSX.Element {
  const [list] = useState<SlideProps[]>(getData());
  const listRefs = useRef<Array<HTMLDivElement | null>>([]);

  const buttonLeftRef = useRef<HTMLButtonElement | null>(null);
  const buttonRightRef = useRef<HTMLButtonElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const animationTiming: number = 1.5;
  let curIndex: number = 0;
  let slideshowTimer: NodeJS.Timeout | null = null;

  useEffect(() => {
    refreshSlideshow(0);

    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 2,
    });
  }, []);

  function refreshSlideshow(direction: number) {
    if (slideshowTimer !== null) {
      clearTimeout(slideshowTimer);
    }

    slideshowTimer = setTimeout(() => {
      curIndex = (curIndex + 1) % list.length;
      refreshSlideshow(1);
    }, 10000);

    let prevIndex = (curIndex + list.length - 1) % list.length;
    let nextIndex = (curIndex + 1) % list.length;

    (buttonLeftRef.current as HTMLButtonElement).disabled = true;
    (buttonRightRef.current as HTMLButtonElement).disabled = true;

    for (let i = 0; i < list.length; i++) {
      let element = listRefs.current[i] as HTMLDivElement;
      element.setAttribute("style", "opacity: 0;");
    }

    let curElement = listRefs.current[curIndex] as HTMLDivElement;
    let prevElement = listRefs.current[prevIndex] as HTMLDivElement;
    let nextElement = listRefs.current[nextIndex] as HTMLDivElement;

    let headingText = curElement.querySelector("h1");
    let supportingText = curElement.querySelector("p");
    let tl = gsap.timeline();

    tl.to(curElement, {
      xPercent: 0,
      scale: 1.1,
      opacity: 1,
      zIndex: 1,
      duration: animationTiming,
      ease: Power4.easeOut,
    })
      .from(headingText, {
        y: 100,
        opacity: 0,
        duration: 0.7,
      })
      .from(
        supportingText,
        {
          y: 100,
          opacity: 0,
          duration: 0.7,
        },
        "<"
      );

    gsap.to(prevElement, {
      xPercent: -70,
      scale: 0.8,
      opacity: 0.5,
      duration: animationTiming,
      ease: Power4.easeOut,
    });

    gsap.to(nextElement, {
      xPercent: 70,
      scale: 0.8,
      opacity: 0.5,
      duration: animationTiming,
      ease: Power4.easeOut,
    });

    setTimeout(() => {
      (buttonLeftRef.current as HTMLButtonElement).disabled = false;
      (buttonRightRef.current as HTMLButtonElement).disabled = false;
    }, (animationTiming + 0.1) * 1000);
  }

  function handleClickRight(event: any) {
    event.preventDefault();

    if (buttonRightRef.current?.disabled === true) {
      return;
    }

    curIndex = (curIndex + 1) % list.length;
    refreshSlideshow(1);
  }

  function handleClickLeft(event: any) {
    event.preventDefault();

    if (buttonLeftRef.current?.disabled === true) {
      return;
    }

    curIndex = (curIndex + list.length - 1) % list.length;
    refreshSlideshow(-1);
  }

  return (
    <Section>
      <Header ref={headerRef}>
        <H2>See the history</H2>
      </Header>
      <Div>
        {list.map((li, idx) => {
          return (
            <Slide
              key={idx}
              {...li}
              ref={(em) => (listRefs.current[idx] = em)}
            />
          );
        })}
      </Div>

      <Button left ref={buttonLeftRef} onClick={handleClickLeft}>
        <FaChevronLeft color="white" size="4rem" />
      </Button>

      <Button right ref={buttonRightRef} onClick={handleClickRight}>
        <FaChevronRight color="white" size="4rem" />
      </Button>
    </Section>
  );
}
