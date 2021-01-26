import './App.scss';
import styled, { keyframes } from 'styled-components';
import EmailSignUp from './EmailSignUp';


const slideInLeft = keyframes`
  from {
    transform: translateX(-20px);
  }
  to {
    transform: translateX(0px);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(20px);
  }
  to {
    transform: translateX(0px);
  }
`;



const Container = styled.div`
  padding:2em 0;
  grid-column: 2/span 1;
  grid-row:2/span 1; 
  @media only screen and (max-width: 960px) {
    grid-column: 1/span 1;
    grid-row:3/span 1;
    padding:2em 5em;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
  @media only screen and (max-width: 700px) {
    padding:2em 0;
  }
`;

const Title = styled.h1`
  font-size:4em;
  color:${props => props.pink ? props.theme.DesaturatedRed : props.theme.DarkGrayishRed};
  font-weight:${props => props.bold ? props.theme.weightBold : props.theme.weightThin};
  letter-spacing:10px;
  text-transform: uppercase;
  margin:0.1em 0;
  animation: ${slideInLeft} 0.8s linear forwards;
  @media only screen and (max-width: 400px) {
    font-size:3em;
  }
`;

const Paragraph = styled.p`
  line-height:2;
  color:${props => props.theme.DesaturatedRed};
  font-weight:${props => props.theme.weightRegular};
  margin:1em 0;
  max-width: 70%;
  animation: ${slideInRight} 0.8s linear forwards;
  @media only screen and (max-width: 1660px) {
   max-width:100%;
    
  }
  @media only screen and (max-width: 960px) {
   max-width:70%;
   text-align:center;
}
@media only screen and (max-width: 700px) {
    max-width:90%;
  }
`;

const ComingSoon = () => {
    return (
        <Container>
            <Title pink>We're</Title>
            <Title bold >coming</Title>
            <Title bold >soon</Title>
            <Paragraph>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</Paragraph>
            <EmailSignUp />
        </Container>
    )
}
export default ComingSoon;
