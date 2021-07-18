import React from 'react'
import styled from "styled-components"
import TechStacks from './TechStacks'
import {techStackInfo} from "../data/techstackInfo"

const About = () => {
    
    return (
      <Wrapper>
        <Container>
            <Box>
            <div>About me</div>
            <Info>Hello, I'm Smith Rakesh.M .A quick thinking individual with a bent towards building
                scalable and user centric web application with hands on
                experience of 300 plus hours of coding. Seeking a
                challenging position in an reputed organization to enhance
                my skills
            </Info>
            </Box>
            <div>
                <ProfileImg src="./profilepic.jpg" alt="profile" />
            </div>
        </Container>
        <div>
           <Heading>Tech Stacks</Heading>
            <Logos>
            {
                techStackInfo?.map((stack) => <TechStacks {...stack} />)
            }
       </Logos>
        </div>
      </Wrapper>
    )
}

export default About

    const Wrapper = styled.div`
        /* margin: 10%; */
    `
    const Container = styled.div`
        display: flex;
        justify-content: space-around;
        padding: 80px;
        flex-wrap: wrap;
    `
    const Info = styled.div`
        max-width:40vw;
        min-width:40vw;
        margin: 0;
        font-size: 22px;
        font-weight: 300;
        justify-content: left;
    `
    const ProfileImg = styled.img`
        width:400px;
        border-radius: 50px;
    
    `
    
    const Box = styled.div`
        >:first-child{
            font-weight: 600;
            font-size: 32px;
        }
    `
    const Heading = styled.h1`
        text-align: center;
    `
    const Logos = styled.div`
           display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 50px;
    `