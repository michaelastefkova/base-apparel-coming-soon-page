import './App.scss';
import styled from 'styled-components';

const StyledP = styled.p`
    font-size: 12px;
    text-align: center;
    width: 100%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    
`;

function Footer() {
    return (
        <footer>
            <StyledP className="attribution">
                Challenge by <a href="https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0">Frontend Mentor</a>.
      Coded by <a href="https://github.com/BatoolHasan/base-apparel-coming-soon-page">Batool Hasan</a>.
    </StyledP>
        </footer>
    )
}

export default Footer;
