import styled from "styled-components";
import logo from '../images/login-logo.svg';

const Login = () => {
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src={logo} />
                </a>
                <div style={{display: "flex" }}>
                    <Join>
                        Join now
                    </Join>
                    <SignIn>
                        Sign in
                    </SignIn>
                </div>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: mowrap;
    positon: relative;

    & > a {
        width: 135px;
        height: 34px;
        media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`

const Join = styled.nav`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
    }
`

const SignIn = styled.nav`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 0px 24px;
    text-align: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);

    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }
`

export default Login;