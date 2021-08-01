import styled from "styled-components"
import Link from "next/link"
import Navbar from "../components/Navbar";
import Image from "next/image"
import {Icon, Button} from "semantic-ui-react"
import {AiOutlineArrowDown} from "react-icons/ai"
import { animateScroll as scroll, Link as LinkScroll } from "react-scroll";
import { useState, useEffect } from "react";

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 25%;
`

export const Hero = styled.h1`
  text-align: center;
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

export const ThumbnailWrapper = styled.div`
  margin: 0 auto;
  padding-left: 20%;
`

export const BtnWrapper = styled.div`
  margin: 0 auto;
  padding-left: 45%;
  border: linear-gradient(90deg, rgba(28,22,145,1) 19%, rgba(192,0,255,1) 100%);
`

export const StartBtn = styled.button`
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(0,3,154,1) 16%, rgba(0,224,255,1) 100%);
    padding: 20px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Encode', sans-serif;
`;

export default function Home(){
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <Hero className="gradient-text">Free Coding Bootcamp</Hero>
        <Sub>A complete step-by-step course to learn how to code without a CS background, from a failed CS student turned Engineer.</Sub>
        <BtnWrapper>
        <StartBtn onClick={() => scroll.scrollTo(700, scrollNav)} scrollNav={scrollNav} smooth={true} duration={500} spy={true} exact="true" offset={-80} to="main">Get Started</StartBtn>
        </BtnWrapper>
      </Container>
      <Material id="main">
      <PSA>Click the image to access the relevant videos. Make sure to take notes of absolutely everything and implement the material whilst watching the lectures</PSA>
        <Lecture>
          <Heading>Mindset</Heading>
          <ThumbnailWrapper>
            <a href="https://www.youtube.com/watch?v=azcrPFhaY9k" target="_blank" rel="noreferrer"><Thumbnail src="/mindset.jpg" height={500} width={600} /></a>
          </ThumbnailWrapper>
        </Lecture>
        <Lecture>
          <Heading>Basics of the internet</Heading>
            <ThumbnailWrapper>
            <a href="https://www.youtube.com/watch?v=7_LPdttKXPc&t=186s" target="_blank" rel="noreferrer"><Thumbnail src="/Internet.png" height={500} width={600}/></a>
            </ThumbnailWrapper>
        </Lecture>
        <Lecture>
          <Heading>HTML</Heading>
          <ThumbnailWrapper>
            <a href='https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB' target="_blank" rel="noreferrer"><Thumbnail src="/html-logo.png" height={500} width={600}/></a>
          </ThumbnailWrapper>
        </Lecture>
        <Lecture>
          <Heading>CSS</Heading>
          <ThumbnailWrapper>
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT" target="_blank" rel="noreferrer"><Thumbnail src="/css-logo.jpg" height={500} width={600} /></a>
          </ThumbnailWrapper>
        </Lecture>
        <Lecture>
          <Heading>Bootstrap</Heading>
          <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv" target="_blank" rel="noreferrer" className="shift"><Thumbnail src="/bootstrap-logo.png" height={500} width={600} className="shift"/></a>
        </Lecture>
        <Lecture>
          <Heading>JavaScript</Heading>
          <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET" target="_blank" rel="noreferrer" className="shift"><Thumbnail src="/js-logo.png" height={500} width={600} className="shift"/></a>
        </Lecture>
        <Lecture>
          <Heading>NodeJs</Heading>
          <a href= "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU" target="_blank" rel="noreferrer" className="shift"><Thumbnail src="/nodejs-logo.png" height={500} width={600} className="shift"/></a>
        </Lecture>
        <Lecture>
          <Heading>ExpressJs</Heading>
          <a href="https://www.youtube.com/playlist?list=PLp50dWW_m40Vruw9uKGNqySCNFLXK5YiO" target="_blank" rel="noreferrer" className="shift"><Thumbnail src="/expressjs-logo.png" height={500} width={600} className="shift"/></a>
        </Lecture>
        <Lecture>
          <Heading>MongoDB</Heading>
          <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u" target="_blank" rel="noreferrer" className="shift"><Thumbnail src="/mongo-logo.jpg" height={500} width={600} className="shift"/></a>
        </Lecture>
        <Lecture>
          <Heading>Git</Heading>
          <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR" rel="noreferrer" className="shift" target="_blank"><Thumbnail src="/GitHub-logo.png" height={500} width={600}className="shift"/></a>
        </Lecture>
        <Lecture>
          <Heading>ReactJs</Heading>
          <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" target="_blank" rel="noreferrer" className="shift"><Thumbnail src="/react-logo.jpg" height={500} width={600} className="shift" /></a>
        </Lecture>
        <Lecture>
          <Heading>NextJs</Heading>
          <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw" target="_blank" rel="noreferrer" className="shift"><Thumbnail src="/next-logo.png" height={500} width={600} className="shift"/></a>
        </Lecture>
      </Material>
    </>
  )
}