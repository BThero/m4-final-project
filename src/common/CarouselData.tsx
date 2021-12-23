import { SlideProps } from "./types";

const list : SlideProps[] = [
  {
    imageUrl: "/assets/2016-winners.webp",
    heading: "Finals 2016",
    description: "May 15-20, Phuket"
  },
  {
    imageUrl: "/assets/2017-winners.webp",
    heading: "Finals 2017",
    description: "May 20-25, Rapid City"
  },
  {
    imageUrl: "/assets/2018-winners.webp",
    heading: "Finals 2018",
    description: "April 15-20, Peking University"
  },
  {
    imageUrl: "/assets/2019-winners.webp",
    heading: "Finals 2019",
    description: "March 31 - April 5, Porto"
  },
  {
    imageUrl: "/assets/2020-winners.webp",
    heading: "Finals 2020",
    description: "October 1-5, Moscow (2021)"
  }
]

export default function getData() : SlideProps[] {
  return list;
}