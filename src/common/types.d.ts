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

export interface Submission {
  time: number,
  problem: number,
  verdict: boolean,
  team?: number
}

export interface TeamData {
  name: string,
  submissions: Submission[]
}