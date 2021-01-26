import './App.scss';
import styled from 'styled-components';
import HeroImgDesktop from '././images/hero-desktop.jpg'
import HeroImgMobile from '././images/hero-mobile.jpg'

const StyledImg = styled.picture`
  height:100%;
  grid-column:4/span 1;
  grid-row:1/span 2;
  
  & > *{
      
      height:100%;
  }
  @media only screen and (max-width: 1410px) {
    overflow:hidden;
  }
  @media only screen and (max-width: 960px) {
    grid-column: 1/span 1;
    grid-row:2/span 1;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
  }
  @media only screen and (max-width: 600px) {
    object-fit: cover;
    display: block;
    
     & > *{
         width:100%;
         height:auto;
     }
  }
`;

const Hero = () => {
    return (
        <StyledImg >
            <source media="(max-width:969px)" srcSet={HeroImgMobile} />
            <source media="(min-width:961px)" srcSet={HeroImgDesktop} />
            <img src={HeroImgDesktop} alt="Hero" />
        </StyledImg>
    )
}
export default Hero;
