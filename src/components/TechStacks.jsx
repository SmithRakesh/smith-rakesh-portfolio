import React from 'react'
import styled from "styled-components"

const Container = styled.div`    
    >img{ 
        width: 100px;
        height: 100px;
        padding: 20px;
        margin: 0px 20px;
        margin-top: 20px;
        text-align: center;
    } 
    >div{
        text-align: center;
    font-weight: bold;
    font-size: 15px;
    line-height: 0.1px;
    }
`
const TechStacks = ({src,title}) => {
    return (
        <Container>
            <img src={src} alt={title} />
            <div>{title}</div>
        </Container>
    )
}

export default TechStacks
