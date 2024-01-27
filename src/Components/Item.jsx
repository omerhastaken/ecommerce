import React from 'react'
import styled from 'styled-components'

export const Item = (props) => {
  return (
    <Container>
        <img src={props.image} />
        <p>{props.name}</p>
        <Prices>
            <NewPrice>
            ₺ {props.new_price}
            </NewPrice>
            <OldPrice>
            ₺ {props.old_price}
            </OldPrice>
        </Prices>
    </Container>
  )
}

const Container = styled.div`
  width: 350px;

  p {
    margin: 6px 0px;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.6s;
    
  }
`

const Prices = styled.div`
  display: flex;
  gap: 20px;

`

const NewPrice = styled.div`
  color: #374151;
  font-size: 18px;
  font-weight: 600;

`

const OldPrice = styled.div`
  color: #8c8c8c;
  font-size: 18px;
  font-weight: 500;
  text-decoration: line-through;
`

export default Item;
