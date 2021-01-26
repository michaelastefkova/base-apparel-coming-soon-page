import './app.scss';
import styled from 'styled-components';

const StyledP = styled.p`
    font-size: 12px;
    text-align: center;
    width: 100%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    
`;

function footer() {
    return (
        <footer>
            <StyledP className="attribution">
                Challenge by <a href="https://www.frontendmentor.io">Frontend Mentor</a>.
      Coded by <a href="https://github.com/michaelastefkova">Michaela Stefkova</a>.
    </StyledP>
        </footer>
    )
}

export default footer;
