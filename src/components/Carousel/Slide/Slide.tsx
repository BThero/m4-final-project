import { forwardRef } from "react";
import styled from "styled-components";
import { SlideProps } from "../../../common/types";

const StyledSlide = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  position: absolute;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
`

const StyledImageContainer = styled.div<{ src: string }>`
  background-image: url(${(props) => (process.env.PUBLIC_URL + props.src)});
  background-repeat: no-repeat;
  background-size: cover;
  align-self: stretch;
  flex: 1;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
`

const StyledWrapper = styled.div`
  width: 100%;  
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  /* &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
  } */
`

const Slide = forwardRef<HTMLDivElement | null, SlideProps>((props, ref) => (
  <StyledSlide ref={ref}>
    <StyledWrapper>
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
      <StyledImageContainer src={props.imageUrl} />
    </StyledWrapper>
  </StyledSlide>
)) 

export default Slide