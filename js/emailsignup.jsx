import './app.scss';
import styled, { keyframes } from 'styled-components';
import errorIcon from './images/icon-error.svg';
import arrowIcon from './images/icon-arrow.svg';


const fadeIn = keyframes`
  from {
   opacity:0;
  }
  to {
    opacity:1;
  }
`;

const Container = styled.div`
padding:1em 0;
opacity:0;
animation: ${fadeIn} 0.8s linear forwards 0.3s;
@media only screen and (max-width: 960px) {
    width:70%;
     
   }
   @media only screen and (max-width: 700px) {
    width:90%;
  }
`;

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    position:relative;
    
`;

const EmailInput = styled.input`
    border: 2px solid ${props => props.theme.DesaturatedRed};
    background-color:transparent;
    padding:1em 2em;
    border-radius:40px;
    padding-right:8em;
    color:${props => props.theme.DarkGrayishRed} !important;
    &::placeholder{
        color:${props => props.theme.DesaturatedRed} !important;
    }
    &:invalid:not(:placeholder-shown) {
        border: 2px solid ${props => props.theme.SoftRed};
    }
    &:invalid:not(:placeholder-shown) ~ img {
        display:block;
    }
    &:invalid:not(:placeholder-shown) ~ label {
        display:block;
    }
    &:focus{
        outline: 2px dotted ${props => props.theme.DesaturatedRed};
    }
`;

const SubmitButton = styled.button`
    position:absolute;
    background-image:${props => props.theme.GradButton};
    border:none;
    width:3em;
    padding: 1em 2.7em;
    border-radius:40px;
    top:0;
    right:0;
    display:flex;
    justify-items:center;
    align-items:center;
    cursor:pointer;
    -webkit-box-shadow: 0px 15px 28px 2px rgba(249,98,98,0.2);
    -moz-box-shadow: 0px 15px 28px 2px rgba(249,98,98,0.2);
    box-shadow: 0px 15px 28px 2px rgba(249,98,98,0.2);
    transition: all 0.5s;
    &:hover{
        transform:translateY(-2px);
        -webkit-box-shadow: 0px 15px 28px 2px rgba(249,98,98,0.4);
        -moz-box-shadow: 0px 15px 28px 2px rgba(249,98,98,0.4);
        box-shadow: 0px 15px 28px 2px rgba(249,98,98,0.4);
    }
`;

const WarningIcon = styled.img`
    width:fit-content;
    position:absolute;
    top:20%;
    right:6em;
    transform:translate(0, -20%);
    display:none;
    `;

const styledlabel = styled.label`
    margin-top:1em;
    margin-left:2em;
    display:none;
`;
const emailsignup = () => {

    return (
        <Container>
            <StyledForm>
                <EmailInput type="email" required aria-label="email address" placeholder="Email Address" />
                <SubmitButton type="submit" value="" aria-label="submit">
                    <img src={arrowIcon} alt="" />
                </SubmitButton>
                <WarningIcon src={errorIcon} alt="Error icon" />
                <StyledLabel classNames="invalidLabel">Please provide a valid email</StyledLabel>
            </StyledForm>
        </Container >
    )

}

export default emailsignup;
