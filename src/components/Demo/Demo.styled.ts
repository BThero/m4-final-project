import styled from "styled-components"

export const Section = styled.section`
  padding: 8rem 3rem;
  background-color: var(--color-gray-700);
`

export const HR = styled.hr`
  border: 1px solid white;
`

export const H2 = styled.h2`
  font-size: 3.5rem;
  color: white;
`

export const Header = styled.header`
  margin-bottom: 2rem;
`

export const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-gray-300);
`

export const StyledLeftWrapper = styled.div`
  flex: 3; 
  margin-right: 2rem;

  p {
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 2rem;
  }

  a {
    display: inline-block;
    font-size: 1.5rem;  
  }
  
  a span {
    margin-right: 0.5rem;
    vertical-align: 0.25rem;
  }
`

export const StyledRightWrapper = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;
`

export const StyledProgressContainer = styled.div`
  margin-top: 0.5rem;
  border: solid 2px white;
  border-radius: 0.75rem;
  background-color: darkgrey;
  height: 1.5rem;
  align-self: stretch;
  padding: 0.125rem 0.125rem;
`

export const StyledProgressBar = styled.div`
  background-color: var(--color-blue-light-400);
  border-radius: 0.5rem;
  height: 100%;
  text-align: right;
`

export const StyledTable = styled.table`
  color: white;
  border-collapse: separate;
  border-spacing: 0.25rem;
  font-size: 1.25rem;
  text-align: center;
  align-self: stretch;

  td, th {
    padding: 0.25rem 0.5rem;
  }

  td:not(:nth-of-type(1)) {
    font-size: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--color-gray-700);
    border: 1px solid white;
    border-radius: 3px;
    color: var(--color-gray-700);
  }

  td.solved {
    background-color: var(--color-success-400);
  }

  td.attempted {
    background-color: var(--color-error-500);
  }

  td.first-solve {
    background-color: var(--color-success-600);
  }

  td {
    border-bottom: 1px solid white;
  }

  td:nth-of-type(1), td:nth-last-of-type(1) {
    color: white;
    font-weight: 700;
  }
`