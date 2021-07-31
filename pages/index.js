import styled from "styled-components"
import Link from "next/link"
import Navbar from "../components/Navbar";
import Image from "next/image"

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 25%;
`

export const Hero = styled.h1`
  text-align: center;
  color: linear-gradient(90deg, rgba(0,3,154,1) 16%, rgba(0,224,255,1) 100%);
`

export const Sub = styled.p`
  color: white;
  text-align: center;
  font-family: 'Enconde', sans-serif;
`

export const PSA = styled.h2`
  text-align: center;
`

export const Lecture = styled.div`
  margin: 0 auto;
`

export const Heading = styled.h2`
  text-align: center;
`

export const Material = styled.div`
  margin: 0 auto;
  padding-top: 25%;
  width: 75%;
`

export const Thumbnail = styled(Image)`
  border-radius: 15px;
`

export default function Home(){
  return (
    <>
      <Navbar />
      <Container>
        <Hero>Free Coding Bootcamp</Hero>
        <Sub>A complete step-by-step course to learn how to code without a CS background, from a failed CS student turned Engineer.</Sub>
      </Container>
      <Material>
      <PSA>Click the image to access the relevant videos. Make sure to take notes of absolutely everything and implement the material whilst watching the lectures</PSA>
        <Lecture>
          <Heading>Mindset</Heading>
          <Link href={{ pathname: "https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" }} target="_blank"><Thumbnail src="/mindset.jpg" height={500} width={600} /></Link>
        </Lecture>
        <Lecture>
          <Heading>Basics of the internet</Heading>
            <Link href={{ pathname: "https://www.youtube.com/watch?v=7_LPdttKXPc&t=186s" }} target="_blank"><Thumbnail src="/Internet.png" height={500} width={600}/></Link>
        </Lecture>
        <Lecture>
          <Heading>HTML</Heading>
          <Link href={{ pathname: 'https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB' }} target="_blank"><Thumbnail src="/html-logo.png" height={500} width={600}/></Link>
        </Lecture>
        <Lecture>
          <Heading>CSS</Heading>
          <Link href={{ pathname: "https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" }} target="_blank"><Thumbnail src="/css-logo.jpg" height={500} width={600} /></Link>
        </Lecture>
        <Lecture>
          <Heading>Bootstrap</Heading>
          <Link href={{ pathname: "https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" }} target="_blank"><Thumbnail src="/bootstrap-logo.png" height={500} width={600} /></Link>
        </Lecture>
        <Lecture>
          <Heading>JavaScript</Heading>
          <Link href={{ pathname: "https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" }} target="_blank"><Thumbnail src="/js-logo.png" height={500} width={600} /></Link>
        </Lecture>
        <Lecture>
          <Heading>NodeJs</Heading>
          <Link href={{ pathname: "https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" }} target="_blank"><Thumbnail src="/nodejs-logo.png" height={500} width={600} /></Link>
        </Lecture>
        <Lecture>
          <Heading>ExpressJs</Heading>
          <Link href={{ pathname: "https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" }} target="_blank"><Thumbnail src="/expressjs-logo.png" height={500} width={600} /></Link>
        </Lecture>
        <Lecture>
          <Heading>MongoDB</Heading>
          <Link href={{ pathname: "https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" }} target="_blank"><Thumbnail src="/mongo-logo.jpg" height={500} width={600} /></Link>
        </Lecture>
        <Lecture>
          <Heading>ReactJs</Heading>
          <Link href={{ pathname: "https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" }} target="_blank"><Thumbnail src="/react-logo.jpg" height={500} width={600} /></Link>
        </Lecture>
        <Lecture>
          <Heading>NextJs</Heading>
          <Link href={{ pathname: "https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" }} target="_blank"><Thumbnail src="/next-logo.png" height={500} width={600} /></Link>
        </Lecture>
      </Material>
    </>
  )
}