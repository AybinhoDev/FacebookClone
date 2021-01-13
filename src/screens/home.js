import React from 'react';
import { Link } from 'react-router-dom'
import Publication from '../components/publication'
import styled from 'styled-components'


const Home = props => {
    console.log('Home => props', props)
    const username = localStorage.getItem('username')
    return (
        <Wrapper>
        <StyledContainer>
            <h2>On est prêt à t'écouter te plaindre {username} </h2>
            <Publication></Publication>
        </StyledContainer>
        </Wrapper>
        
    );
};

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Home;