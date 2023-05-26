import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  background-color: #24252a;
  padding: 30px 20px;
  align-items: center;
`

export const AppTitle = styled.h1`
  color: white;
  font-family: 'bold';
  margin: 0;
`

export const ProfilePic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 20px 0 auto;
`

export const ProfileName = styled.span`
  font-family: 'bold';
  color: white;
  font-size: 18px;
  margin-right: 20px;
`

export const SignoutButton = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: #392e4a;
`
