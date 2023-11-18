import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");
  return (
    <Container>
        <Logo>
            <img src={logo} />
            <p>SHOPPER</p>
        </Logo>
        <NavMenu>
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Menu</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </NavMenu>
        <NavLoginCart>
            <Link to='/login'><button>LogIn</button></Link>
            <Link to='/cart'><img src={cart_icon} /></Link>
            <CartCount>0</CartCount>
        </NavLoginCart>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 16px;
    box-shadow: 0 1px 3px -2px black;

`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p {
        color: #171717;
        font-size: 38px;
        font-weight: 600;
    }
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    gap: 50px;
    color: #626262;
    font-size: 20px;
    font-weight: 500;


    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px; 
        cursor: pointer;

    }

    hr {
        border:  none;
        width: 80%;
        height: 3px;
        border-radius: 10px;
        background: #FF4141;
    }
`

const NavLoginCart = styled.div`
    display: flex;
    align-items: center;
    gap: 45px;

    button {
        width: 157px;
        height: 58px;
        outline: none;
        border: 1px solid #7a7a7a;
        border-radius: 75px;
        color: #515151;
        font-size: 20px;
        font-weight: 500;
        background: white;
        cursor: pointer;

    }
`
const CartCount = styled.div`
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -35px;
    margin-left: -55px;
    font-size: 14px;
    background: red;
    color: white;
    border-radius: 11px;
`
