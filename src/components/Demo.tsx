import { useEffect, useLayoutEffect, useRef } from "react"
import styled from "styled-components"
import { Submission } from "./types"
import {
  getContestDuration, 
  getData, 
  getProblemsCount, 
  getSubmissions, 
  getTeamsCount 
} from "./DemoTableData"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "./Link"
import { FaArrowRight } from "react-icons/fa"

const StyledDemo = styled.section`
  padding: 8rem 3rem;
  background-color: var(--color-gray-700);

  & > a {
    font-size: 2rem;
    text-align: center;
  }
`

const StyledHeader = styled.header`
  margin-bottom: 2rem;

  h2 {
    font-size: 3.5rem;
    color: white;
  }
`

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-gray-300);
`

const StyledLeftWrapper = styled.div`
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

const StyledRightWrapper = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;
`

const StyledProgressContainer = styled.div`
  margin-top: 0.5rem;
  border: solid 2px white;
  border-radius: 0.75rem;
  background-color: darkgrey;
  height: 1.5rem;
  align-self: stretch;
  padding: 0.125rem 0.125rem;
`

const StyledProgressBar = styled.div`
  background-color: var(--color-blue-light-400);
  border-radius: 0.5rem;
  height: 100%;
  text-align: right;
`

const StyledTable = styled.table`
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

export default function Demo() : JSX.Element {
  const list = getData()
  const submissions = getSubmissions()
  const problemsCount = getProblemsCount()
  const teamsCount = getTeamsCount()
  const contestDuration = getContestDuration()

  const tableRows = teamsCount
  const tableColumns = problemsCount
  const tableSize = tableRows * tableColumns

  const cellRefs = useRef<Array<HTMLTableCellElement | null>>([])
  const resultRefs = useRef<Array<HTMLTableCellElement | null>>([])

  const demoRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const tableRef = useRef<HTMLTableElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const leftWrapperRef = useRef<HTMLDivElement | null>(null)

  const vh = document.documentElement.clientHeight
  let prevProgress = 0

  function updateTable(timestamp : number) {
    for (let i = 0; i < tableSize; i++) {
      let element = cellRefs.current[i] as HTMLTableCellElement
      element.textContent = ''
      element.classList.remove(...(element.classList as any))
    }

    for (let i = 0; i < teamsCount; i++) {
      let element = resultRefs.current[i] as HTMLTableCellElement
      element.textContent = '0'
    }

    let problemStatus : Array<number> = Array(tableSize).fill(0)
    let problemSolved : Array<boolean> = Array(problemsCount).fill(false)
    let solvedCount : Array<number> = Array(teamsCount).fill(0)

    for (let i = 0; i < submissions.length; i++) {
      let submission : Submission = submissions[i]
      let team = submission.team || 0
      let problem = submission.problem
      let idx = team * tableColumns + problem
      let element = cellRefs.current[idx] as HTMLTableCellElement

      if (submission.time <= timestamp) {
        problemStatus[idx]--

        if (submission.verdict === true) {
          problemStatus[idx] = Math.abs(problemStatus[idx])
        }

        let status = problemStatus[idx]

        if (status < 0) {
          element.textContent = String((status === 0 ? '' : Math.abs(status)))
          element.classList.add('attempted')
        }
        else {
          element.textContent = String((status === 0 ? '' : status))
          element.classList.remove('attempted')
          solvedCount[team]++
          let countElement = resultRefs.current[team] as HTMLTableCellElement
          countElement.textContent = `${solvedCount[team]}`

          if (problemSolved[problem]) {
            element.classList.add('solved')
          }
          else {
            element.classList.add('first-solve');
            problemSolved[problem] = true
          }
        }
      }
    }
  }

  function handleScroll() {
    let demoElement = demoRef.current as HTMLDivElement
    let offsetHeight = demoElement.offsetTop
    let height = demoElement.offsetHeight
    let animationHeight = height * 0.6

    let curProgress = window.scrollY + vh * 0.7 - offsetHeight
    curProgress = Math.max(curProgress - (height - animationHeight) / 2, 0)
    curProgress = Math.min(curProgress, animationHeight)

    if (prevProgress !== curProgress) {
      let progressElement = progressRef.current as HTMLDivElement
      progressElement.setAttribute('style', `width: ${curProgress / animationHeight * 100}%`)
      updateTable(curProgress * contestDuration / animationHeight)
      prevProgress = curProgress
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    window.onscroll = handleScroll

    gsap.from(headerRef.current, {
      x: -300,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: headerRef.current
    })

    gsap.from(leftWrapperRef.current, {
      y: 300,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: headerRef.current
    })

    gsap.from(tableRef.current, {
      x: 300,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: headerRef.current
    })
  }, [])

  return (
    <StyledDemo ref={demoRef}>
      <StyledHeader ref={headerRef}>
        <h2>See the action in real time</h2>
        <hr />
      </StyledHeader>
      <StyledContentWrapper>
        <StyledLeftWrapper ref={leftWrapperRef}>
          <p>
            The time goes on, but scoreboards never seem to improve on quality. A major part of our mission is to fix this issue and provide the users with the best experience. The scoreboards are fully animated from the first minute down to the last one. Ever wanted to feel the atmosphere and pressure of a competition? Well, welcome to our website!
          </p>
          <Link 
            href="https://icpc.global/"
            offset="2rem"
          >
            <span>
              See more
            </span>
            <FaArrowRight size="1.5rem" />
          </Link>
        </StyledLeftWrapper>

        <StyledRightWrapper>
          <StyledProgressContainer>
            <StyledProgressBar ref={progressRef}>
            </StyledProgressBar>
          </StyledProgressContainer>
          <StyledTable ref={tableRef}>
            <thead>
              <tr>
                <th></th>
                {
                  [...Array(tableColumns)].map((_, idx) => {
                    return (
                      <th key={idx}>
                        {String.fromCharCode(65 + idx)}
                      </th>
                    )
                  })
                }
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                [...Array(tableRows)].map((_, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {list[i].name}
                      </td>
                      {
                        [...Array(tableColumns)].map((_, j) => {
                          return (
                            <td key={j} ref={el => cellRefs.current[i * tableColumns + j] = el}></td>
                          )
                        })
                      }
                      <td ref={el => resultRefs.current[i] = el}>
                        0
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </StyledTable>
        </StyledRightWrapper>
      </StyledContentWrapper>
    </StyledDemo>
  )
}