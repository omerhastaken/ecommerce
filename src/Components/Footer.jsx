import React from 'react'
import footer_logo from './Assets/logo_big.png'
import styled from 'styled-components'
import instagram from './Assets/instagram_icon.png'
import pinterest from './Assets/pintester_icon.png'
import whatsapp from './Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <Container>
        <Logo>
            <img src={footer_logo} />
            <p>SHOPPER</p>
        </Logo>
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <Social>
            <Icons>
                <img src={instagram} />
                <img src={pinterest} />
                <img src={whatsapp} />
            </Icons>
        </Social>
        <Copyright>
            <hr />
            <p>Copyright © 2024 - All Rights Reserved.</p>
        </Copyright>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    ul{
        display: flex;
        list-style: none;
        gap: 50px;
        color: #252525;
        font-size: 20px;
    }

    li{
        cursor: pointer;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    p{
        color: #383838;
        font-size: 46px;
        font-weight: 700;

    }
`

const Social = styled.div`
    display: flex;
    gap: 20px;
`

const Icons = styled.div`
    padding: 10px;
    padding-bottom: 6px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;

`

const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    margin-bottom: 30px;
    color: #1a1a1a;
    font-size: 20px;

    hr{
        width: 80%;
        border: none;
        border-radius: 10px;
        height: 3px;
        background: #c7c7c7;
    }
`

