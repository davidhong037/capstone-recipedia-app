import styled from 'styled-components'
import backgroundImage from '../../images/food3.jpg'

export const LoginWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${backgroundImage});
`;

export const LoginContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginFormContainer = styled.div`
    width: 900px;
    height: 500px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
        0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    flex-wrap: wrap;
`;

export const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginText = styled.h1`
    font-size: 40px;
    margin-top: 0;
`;

export const EmailInput = styled.input`
    outline: none;
    border: none;
    width: 370px;
    padding: 15px;
    border-radius: 10px;
    background-color: #edf5f3;
    margin: 5px 0;
    font-size: 14px;
`;

export const PasswordInput = styled(EmailInput)`
`;


export const ErrorMessage = styled.div`
    width: 370px;
	padding: 15px;
	margin: 5px 0;
	font-size: 14px;
	background-color: #f34646;
	color: white;
	border-radius: 5px;
	text-align: center;
`;

export const Right = styled.div`
    flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #3bb19b;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
`;

export const SignupText = styled.h1`
    margin-top: 0;
    color: white;
    font-size: 40px;
    align-self: center;
`;

export const WhiteButton = styled.button`
    border: none;
    outline: none;
    padding: 12px 0;
    background-color: white;
    border-radius: 20px;
    width: 180px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    &:hover{
        background-color: lightgray;
    }
    transition: all 0.3s ease;
`;

export const GreenButton = styled(WhiteButton)`
    background-color: #3bb19b;
    color: white;
    margin: 10px;
    &:hover{
        background-color: #297b6c;
    }
    transition: all 0.3s ease;
`;