import React, { useState } from 'react'
import styled from 'styled-components'
import { uuid } from 'uuidv4'
import LikeButton from '../likeButton'
import 'font-awesome/css/font-awesome.min.css';

const Publication = () => {
    
    
    const [publi, setPubli] = useState([])
    const [inputValue, setInputValue] = useState('')
    const envoyer = (e) =>{
        e.preventDefault()
        const newPubli = {id: uuid(), content: inputValue}
        setPubli([...publi, newPubli])
        setInputValue('')
    }

    const deleteTodo = id => {
        const newPubli = publi.filter(publi => publi.id !== id)
        setPubli(newPubli)
    }
    const username = localStorage.getItem('username')
    return (
        <div>
            <StyledForm onSubmit={envoyer}>
                <StyledTextarea placeholder="On s'en fout de ta vie mais raconte quand même" value={inputValue}
                onChange={(e) => setInputValue(e.target.value) }  
                type="text" required></StyledTextarea>
                <SubmitInput type="submit"></SubmitInput>
                
            </StyledForm>
            {publi.map(publi => 
            <StyledBorder>
            <h4>{username} : </h4>
            <StyledP key={publi.id}>{publi.content}</StyledP>
            <StyledAd>
                <StyledSpanTrash className="fa fa-ban" onClick={() => deleteTodo(publi.id)}></StyledSpanTrash> 
                <LikeButton></LikeButton>
            </StyledAd>
            
            </StyledBorder>
            )}
            
        </div>
    );
};

const StyledBorder = styled.div`    
    padding:10px;
    background-color: white;
    border: 1px solid grey;
    margin-top: 30px;
    padding: 1px 10px 0px 10px;
`
const StyledSpanTrash = styled.span`
    cursor: pointer;
    user-select: none;
`

const StyledP = styled.p`
    font-size: 14px;
    font-family: arial;
`

const StyledAd = styled.div`
    display: flex ;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 15px;
    user-select: none;
    
`

const SubmitInput = styled.input`
transition: 0.3s;
background-color:#3b5998;
float: right;
font-size: 16px;
align-self: flex-end;
color:white;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
 
`

const StyledTextarea = styled.textarea`
float: left;
width: 250%;
min-height: 75px;
border: 1px solid grey;
color: #000000;
`

export default Publication;