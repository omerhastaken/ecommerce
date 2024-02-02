import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item'
import all_product from '../Components/Assets/all_product'

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <Container>
        <img src={props.banner} />
        <IndexSort>
          <p>
            <span>Showing 1-12</span> out of 36 products  
          </p>
          <Sort>
            Sort by <img src={dropdown} alt="" />
          </Sort>
        </IndexSort>
        <Products>
          {all_product.map((item,i)=>{
            if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else{
              return null;
            }
          })}
        </Products>
    </Container>
  )
}

const Container = styled.div`
  img{
    /* display: block;
    margin: 30px auto;
    width: 82%; */
  }
`

const IndexSort = styled.div``

const Sort = styled.div``

const Products = styled.div``

