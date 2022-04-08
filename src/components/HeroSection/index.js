

import {
  HeroContainer,
  HeroContent1,
  HeroH1,
  HeroP1,
  HeroContent2,
  HeroH2,
  HeroP2,
  ButtonContainer,
  ButtonLink1,
  Img,
  Img2,
  ImgWrapper
} from "./HeroElements";

import img1 from '../../images/free.png';
import img2 from '../../images/presale.png';


const HeroSection = () => {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };

  /* token purchase functionality */
  // const onClick = () => {
  //   console.log("clicked");
  
  // }

  return (
    <HeroContainer id="home">
      <HeroContent1>
        <HeroH1>Pre-Sale</HeroH1>
        <HeroP1>
          The first 24 hours will be exclusively available for whitelisted
          "Genesis" holders. Public sale will begin right after - total time to
          raise funds is 48 hours.
        </HeroP1>
        <HeroP1 style = {{color: 'white'}}>Max. buy per wallet: 5,000 $USDC</HeroP1>
        <ImgWrapper>
        <Img src={img1} alt="free" />
        </ImgWrapper>
      </HeroContent1>
      <HeroContent2>
      <ImgWrapper>
        <Img2 src={img2} alt="free" />
        </ImgWrapper>
        <HeroH2>Pre-Sale Allocation</HeroH2>
        <HeroP2>
          20 percent Team Fund for future development and hiring of staff 
          </HeroP2>
          <HeroP2>80
          percent Liquidity for AVAX/WAVAX and USDC liquidity pools
        </HeroP2>
        <ButtonContainer>
          {/* buttons will need onClick  */}
          <ButtonLink1>Approve $USDC</ButtonLink1>
          <ButtonLink1>Buy $AUXL</ButtonLink1>
        </ButtonContainer>
      </HeroContent2>
    </HeroContainer>
  );
};

export default HeroSection;
