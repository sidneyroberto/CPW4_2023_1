import styled from 'styled-components'

export const LoginContainer = styled.div`
  padding: 100px 0;
`

export const LoginButton = styled.button`
  background-color: #f7f7f7;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 400px;
  padding: 20px 0;
  border-radius: 20px;
  box-shadow: 20px 20px 60px #d2d2d2, -20px -20px 60px #ffffff;
  cursor: pointer;
`

export const ProviderLogo = styled.img`
  width: 48px;
  margin-right: 20px;
`

export const SignInText = styled.span`
  font-family: 'bold';
  font-size: 18px;
  color: #555;
`

const Message = styled.h2`
  font-family: 'bold';
  color: white;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  margin: 30px auto;
  text-align: center;
`

export const InfoMessage = styled(Message)`
  background-color: #4d05e8;
`

export const ErrorMessage = styled(Message)`
  background-color: #cf000f;
`
