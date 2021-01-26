import './App.scss';
import styled from 'styled-components';
import LogoImg from '././images/logo.svg'

const StyledLogo = styled.div`
  padding:2em 3em;
  padding-left:0;
  grid-column: 2/span 1;
  grid-row:1/span 1;
  display:flex;
  justify-items:center;
  align-items:center;
  @media only screen and (max-width: 960px) {
    padding:2em 3em;
    grid-column: 1/span 1;
    grid-row:1/span 1;
    display:flex;
    justify-content:flex-start;
    align-items:center;
  }
  
`;
const StyledImg = styled.img`
  cursor:pointer;
  
`;


const Logo = () => {
    return (
        <StyledLogo>
            <StyledImg src={LogoImg} alt="Logo" />
        </StyledLogo>
    )
}
export default Logo;
