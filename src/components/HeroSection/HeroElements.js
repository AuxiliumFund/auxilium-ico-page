import styled from "styled-components";
import { MdArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba (0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroContent1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroH1 = styled.h1`
  color: #f5f5f5;
  font-size: 60px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroH2 = styled.h2`
  color: #f5f5f5;
  font-size: 15px;
  text-align: center;
  margin-left: 150px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroContent2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroP1 = styled.p`
  margin-top: 24px;
  color: #717171;
  font-size: 15px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroP2 = styled.p`
  margin-left: 150px;
  margin-top: 24px;
  color: #f5f5f5;
  font-size: 12px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  margin-left: 100px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 250px;
  position: relative;
  z-index: 1;
`;

export const ButtonLink1 = styled.button`
display: inline-block;
padding: 0.3em 1.2em;
margin: 0 0.3em 0.3em 0;
margin-left: 20px;
border-radius: 2em;
box-sizing: border-box;
text-decoration: none;
font-family: 'Roboto',sans-serif;
font-weight: 300;
color: #FFFFFF;
background-color: #4eb5f1;
text-align: center;
transition: all 0.2s;

&:hover {
    background-color: #4095c6;

}
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;


export const ImgWrapper = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
position: absolute;
top: 120px;
width: 300px;
height: 300px;
margin: 0 0 10px 0;
padding-right: 0;

@media screen and (max-width: 768px) {
  display: none;
}
`

export const Img2 = styled.img`
position: absolute;
top: 100px;
right: 250px;
width: 150px;
height: 150px;
margin: 0 0 10px 0;
padding-right: 0;

@media screen and (max-width: 768px) {
  display: none;
}
`