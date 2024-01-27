import React from 'react'
import styled from 'styled-components'

export const NewsLetter = () => {
  return (
    <Container>
        <h1>Get Exclusive Offers On Your E-mail</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <Email>
            <input type='email' placeholder='Your Email' />
            <button>Subscribe</button>
        </Email>
    </Container>
  )
}

const Container = styled.div`
    width: 65%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    
`

const Email = styled.div``
