import { forwardRef } from "react";
import styled from "styled-components";
import { SlideProps } from "./types";

const StyledSlide = styled.div<{ src: string}>`
  background-image: url(${(props) => (props.src)});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  flex-shrink: 0;
  transition: transform 1s linear;
  position: absolute;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
`

const Slide = forwardRef<HTMLDivElement | null, SlideProps>((props, ref) => (
  <StyledSlide src={props.imageUrl} ref={ref}>
    <h1>{props.heading}</h1>
    <p>{props.description}</p>
  </StyledSlide>
)) 

export default Slide