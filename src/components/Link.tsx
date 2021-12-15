import { ForwardedRef, forwardRef, useEffect, useRef } from "react"
import styled from "styled-components"
import { LinkProps } from "./types.d"
import { gsap } from "gsap"

const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none; 
  color: var(--color-rose-300);

  hr {
    width: 20px;
    visibility: hidden;
    border-color: white;
  }
`

const useForwardedRef = (ref : ForwardedRef<HTMLAnchorElement | null>) => {
  const innerRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
      if (!ref) return;

      if (typeof ref === 'function') {
        (ref as Function)(innerRef.current);
      } else {
        ref.current = innerRef.current;
      }
    });

  return innerRef;
}

const Link = forwardRef<HTMLAnchorElement | null, LinkProps>((props, ref) => {
  let linkUnderlineRef = useRef<(HTMLHRElement | null)>(null)
  const linkRef = useForwardedRef(ref)

  useEffect(() => {
    let linkElement = linkRef.current as HTMLAnchorElement

    if (linkRef && linkElement) {
      linkElement.addEventListener('mouseenter', () => {
        let linkWidth = linkElement.clientWidth

        if (props.offset) {
          gsap.to(linkElement, {
            x: props.offset 
          })
        }

        gsap.fromTo(linkUnderlineRef.current, {
          visibility: 'hidden',
          x: 0,
          opacity: 1,
          duration: 1
        }, {
          visibility: 'visible',
          x: linkWidth - 20,
          opacity: 0,
          duration: 1
        })
      })

      if (props.offset) {
        linkElement.addEventListener('mouseleave', () => {
          gsap.to(linkElement, {
            x: 0
          })
        })
      }
    }
  }, [])

  return (
    <StyledLink href={props.href} ref={linkRef}>
      {props.children}
      <hr ref={linkUnderlineRef} />
    </StyledLink>
  )
})

export default Link