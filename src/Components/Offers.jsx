import React from 'react'
import styled from 'styled-components'
import exclusive_image from './Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <Container>
        <Left>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS</p>
        </Left>
        <Right>
          <img src={exclusive_image} />
        </Right>
    </Container>
  )
}

const Container = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  margin: auto;
  padding: 0px 140px;
  margin-bottom: 15px;
  background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    color: #171717;
    font-size: 80px;
    font-weight: 600;
  }

  p{
    color: #171717;
    font-size:22px;
    font-weight: 600;
  }

  button{
    height: 282px;
    width: 70px;
    border-radius: 35px;
    background: #ff4141;
    border: none;
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
    cursor: pointer;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

