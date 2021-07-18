import React from 'react'
import styled from "styled-components"

const SingleProject = ({src,title,info,url,logo}) => {
    return (
        <Container>
            <div>
                <ClonedImg src={src} alt={title} />
            </div>
            <Title>
                {title}
            </Title>
            <Info>
                {info}
            </Info>
            <Url target="_blank" href={url}>Github link</Url>
            <ImgContainer>
                <Img src="./html.jpg" alt="html logo" />
                <Img src="./css.jpg" alt="css logo" />
                <Img src="./js.png" alt="js logo" />
                {logo && <Img src={logo} alt="react logo" />}
            </ImgContainer>
        </Container>
    )
}

export default SingleProject

const Container = styled.div`
    width:32vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    padding:10px;
    border:1px solid lightgray;
    border-radius:5px;
    height:63vh;
    box-shadow: 5px 10px #888888;
    margin-bottom: 10vh;
`

const Title = styled.h3`
    text-align:center;
    line-height: 5px;
`
const Info = styled.div``

const Url = styled.a`
    text-decoration:none;
    color:black;
    font-weight:bold;
    padding: 8px 0;
`
const ImgContainer = styled.div`
    display: flex;
    align-items: center;
`
const ClonedImg = styled.img`
width:100%;
height:30vh;
`

const Img = styled.img`
    width:7vh;
    height:7vh;
    margin-right: 8px;
`