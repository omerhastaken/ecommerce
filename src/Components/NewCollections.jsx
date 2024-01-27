import React from 'react'
import styled from 'styled-components'
import new_collection from './Assets/new_collections'
import Item from './Item'

export const NewCollections = () => {
  return (
    <Container>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <Collections>
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </Collections>
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

const Collections = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 50px;
    gap: 30px;
    
`