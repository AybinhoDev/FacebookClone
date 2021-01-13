import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import myImage from '../../assets/images/fbicon.png'

const HeaderLogout = () => {
  const history = useHistory()
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
    window.location.reload(); 
  }

  return (
    <Container>
      <UserImage/>
      <StyledSpan>Facebook</StyledSpan>
      {isToken ? ( <LogoutButton onClick={handleLogout}>Se déconnecter</LogoutButton>
      ) : (
        null
      )}
      
    </Container>
  )
}

const StyledSpan = styled.span`
font-weight: bold;
color: white;
display: inline-flex;
align-items: center;
margin-left:10px;

`
const LogoutButton = styled.p`
  padding: 12px;
  background-color: Transparent;
  color:white;
  cursor: pointer;
  font-weight: bold;
`
const UserImage = styled.div`
  background-image: url(${myImage});
  width:85px;
  height:85px;
  max-width:100%;
  max-height:100%;
align-items: center;
border-radius: 50%;
`

const Container = styled.div`
  background-color: #3b5998;
  display: flex;
  justify-content: space-between;
  height: 70px;
`


export default HeaderLogout;