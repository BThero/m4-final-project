import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--color-gray-700);
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Div = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 50vw;
  height: calc(50vw * 2 / 3);
  margin-bottom: 2rem;
`;

export const Header = styled.header`
  margin-bottom: 4rem;
  color: white;
  text-align: center;
`;

export const H2 = styled.h2`
  font-size: 3.5rem;
`

interface ButtonProps {
  left?: boolean;
  right?: boolean;
}

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  border: 0;
  background-color: transparent;

  &:hover svg {
    transform: scale(1.2);
  }

  &[disabled] svg {
    fill: darkgrey;
  }

  left: ${(props : ButtonProps) => (props.left ? '5rem' : 'default')};
  right: ${(props : ButtonProps) => (props.right ? '5rem' : 'default')};
` 