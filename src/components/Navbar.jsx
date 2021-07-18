import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

const Navbar = () => {

    const links = [
        {
            to:"/",
            title:"Home",
            exact:"true"
        },
        {
            to:"/about",
            title:"About",
            exact:"false"
        },
        {
            to:"/projects",
            title:"Projects",
            exact:"false"
        },
        {
            to:"/contact",
            title:"Contact",
            exact:"false"
        },
    ]
    return (
        <Container>
            <NavLink exact to="/">Smith's Portfolio</NavLink>
            {
                links.map(({to,title,exact}) => <LinkContainer><NavLink exact={exact} to={to}>{title}</NavLink></LinkContainer>)
            }
        </Container>
    )
}

export default Navbar
const Container = styled.div`
background-color: lightslategrey;
padding: 10px 30px;
    display:flex;
    >:first-child{
        flex:1;
        font-weight: bold;
        font-size: 22px;
        color:white;
        text-decoration:none;
    }
    align-items: center;
    justify-content: space-between;
    margin-bottom:5%;
`
const LinkContainer = styled.div`
>a{
    text-decoration:none;
    margin-right: 25px;
    color:white;
}
`