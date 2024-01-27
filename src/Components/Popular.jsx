import React from 'react'
import styled from 'styled-components'
import data_product from './Assets/data'
import Item from "./Item"

export const Popular = () => {
  return (
    <Container>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <PopularItem>
        {data_product.map((item, i) =>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </PopularItem>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 90vh;

  h1 {
    color: #171717;
    font-size: 50px;
    font-weight: 600;
  }

  hr {
    width: 200px;
    height: 6px;
    border-radius: 10px;
    background-color: #252525;

  }
`

const PopularItem = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 30px;
`

export default Popular;
    
