import './App.scss';
import styled, {ThemeProvider} from 'styled-components';
import Logo from './Logo';
import ComingSoon from './ComingSoon';
import Hero from './Hero';
import backgroundPattern from './images/bg-pattern-desktop.svg';
import Footer from './Footer';


const theme = {
  DesaturatedRed: "hsl(0, 36%, 70%)",
  SoftRed: "hsl(0, 93%, 68%)",
  DarkGrayishRed: "hsl(0, 6%, 24%)",
  GradButton:"linear-gradient(135deg, #f8bfbf,  #ee8c8c)",
  GradButtonHover:"linear-gradient(135deg, #ffffff,  #fff5f5)",
  weightThin:300,
  weightRegular:400,
  weightBold:600,
};





const Main = styled.div`
  display:grid;
  grid-template-columns: 1fr 2fr 1fr max-content;
  grid-template-rows: 15vh 85vh;
  background-image:url(${backgroundPattern}), url(${backgroundPattern});
  background-repeat:no-repeat;
  background-size:cover;
  
  
  @media only screen and (max-width: 1600px) {
    grid-template-columns: 1fr 3fr 1fr max-content;
    
  }
  @media only screen and (max-width: 1410px) {
    grid-template-columns: 1fr 5fr 1fr 50%;
    
  }
  @media only screen and (max-width: 1030px) {
    grid-template-columns: 1fr 7fr 1fr 50%;
    
  }
  @media only screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: 12vh 1fr max-content;
    
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main>
          <Logo/>
          <ComingSoon/>
          <Hero/>
        </Main>
          <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
