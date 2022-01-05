import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { SignupWrap, SignupContainer, SignupFormContainer, Left, WelcomeText, WhiteButton, GreenButton, Right, FormContainer, CreateText, PasswordText, FirstNameInput, LastNameInput, EmailInput, PasswordInput, ErrorMessage } from './signupComponent'
import { IconButton, Snackbar, Button } from '@mui/material'
import { Close } from '@mui/icons-material'

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if ("clickaway" == reason) return;
        setOpen(false);
    }

    const handleClickEvent = () => {
        setOpen(true);
    }

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const url = 'https://capstone-recipedia-app.herokuapp.com/api/users'
            const { data: res } = await axios.post(url, data)
            setTimeout(() => navigate('/login'), 1000)
            console.log(res.message)
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
        
    }

    return (
        <SignupWrap>
            <SignupContainer>
                <SignupFormContainer>
                    <Left>
                        <WelcomeText>
                            Welcome Back
                        </WelcomeText>
                        <Link to='/login'>
                            <WhiteButton type='button'>
                                Sign In
                            </WhiteButton>
                        </Link>
                    </Left>
                    <Right>
                        <FormContainer onSubmit={handleSubmit}>
                            <CreateText>
                                Create Account
                            </CreateText>
                            <PasswordText>
                                Password should be at least 8 characters long, contain at least 1 lower and upper-case letter and a symbol.
                            </PasswordText>
                            <FirstNameInput
                                type='text'
                                placeholder='First Name'
                                name='firstName'
                                onChange={handleChange}
                                value={data.firstName}
                                required
                                className={data.firstName}
                            />
                            <LastNameInput
                                type='text'
                                placeholder='Last Name'
                                name='lastName'
                                onChange={handleChange}
                                value={data.lastName}
                                required
                                className={data.lastName}
                            />
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
                        
                            <GreenButton
                                type='submit'
                                onClick={handleClickEvent}
                            >
                                Sign Up
                            </GreenButton>
                            <Snackbar
                                anchorOrigin={{
                                    horizontal: "center",
                                    vertical: "top",
                                  }}
                                  open={open}
                                  autoHideDuration={1000}
                                  message="New User Account Created!"
                                  onClose={handleClose}
                                  action={
                                    <>
                                      <IconButton
                                        size="small"
                                        aria-label="close"
                                        color="inherit"
                                        onClick={handleClose}
                                      >
                                        <Close fontSize="small" />
                                      </IconButton>
                                    </>
                                }
                            />
                        </FormContainer>
                    </Right>
                </SignupFormContainer>
            </SignupContainer>
        </SignupWrap>
    )
}

export default Signup;