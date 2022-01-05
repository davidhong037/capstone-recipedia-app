import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { LoginWrap, LoginContainer, LoginFormContainer, Left, FormContainer, LoginText, EmailInput, PasswordInput, ErrorMessage, Right, SignupText, WhiteButton, GreenButton } from './loginComponent'


const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState('')

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const url = 'https://capstone-recipedia-app.herokuapp.com/api/auth'
            const { data: res } = await axios.post(url, data)
            localStorage.setItem('token', res.data)
            window.location.href = '/'
            
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <LoginWrap >
            <LoginContainer>
                <LoginFormContainer>
                    <Left>
                        <FormContainer onSubmit={handleSubmit}>
                            <LoginText>
                                Login to your account
                            </LoginText>
                            <EmailInput
                                type='email'
                                placeholder='Email'
                                name='email'
                                onChange={handleChange}
                                value={data.email}
                                required
                                className={data.email}
                            />
                            <PasswordInput
                                type='password'
                                placeholder='Password'
                                name='password'
                                onChange={handleChange}
                                value={data.password}
                                required
                                className={data.password}
                            />
                            {error && <ErrorMessage>{error}</ErrorMessage>}

                            <GreenButton type='submit'>
                                Sign In
                            </GreenButton>
                        </FormContainer>
                    </Left>
                    <Right>
                        <SignupText>
                            New Here?
                        </SignupText>
                        <Link to='/signup'>
                            <WhiteButton type='button'>
                                Sign Up
                            </WhiteButton>
                        </Link>
                    </Right>
                </LoginFormContainer>
            </LoginContainer> 
        </LoginWrap>    
    )
}

export default Login;