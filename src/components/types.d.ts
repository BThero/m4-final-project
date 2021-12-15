export interface SlideProps {
  imageUrl: string,
  heading: string,
  description: string,
  onmouseover?: string,
  onmouseout?: string
}

export interface LinkProps {
  children: any,
  href: string,
  offset?: string
}