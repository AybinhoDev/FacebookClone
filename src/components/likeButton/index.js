import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components'

const Fav = () => {
    
    const [toggle, setToggle] = useState(false)
    const toggler = () => {
        toggle ? setToggle(false): setToggle(true);
    }
    return (
        <div>
            {toggle? <StyledSpanBlue onClick={toggler} className="fa fa-thumbs-up">1 J'aime</StyledSpanBlue> 
            : <StyledSpanBlack onClick={toggler} className="fa fa-thumbs-up"></StyledSpanBlack>}
            {toggle? <StyledSpanBlue onClick={toggler} className="fa fa-thumbs-down">1 Je n'aime pas</StyledSpanBlue> 
            : <StyledSpanBlack onClick={toggler} className="fa fa-thumbs-down"></StyledSpanBlack>}
        </div>
    );
};

const StyledSpanBlue = styled.span`
    color: blue;
    margin-bottom: 12px;
    font-size: 15px;
    cursor: pointer;
    user-select: none;
`
const StyledSpanBlack = styled.span`
    color: black;
    margin-bottom: 12px;
    font-size: 15px;
    cursor: pointer;
    user-select: none;
`

export default Fav;