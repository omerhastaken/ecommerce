import React from 'react'
import styled from 'styled-components'
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

export const Hero = () => {
  return (
    <Container>
        <Dilay>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
              <HandIcon>
                <p>new</p>
                <img src={hand_icon} />
              </HandIcon>
              <p>Collections</p>
              <p>For everyone</p>
            </div>
            <Latest>
              <div>Latest Collections</div>
              <img src={arrow_icon} />
            </Latest>
        </Dilay>
        <RightSide>
          <img src={hero_image} />
        </RightSide>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #fde1ff, #e1ffea22 %60);
  display: flex;
`
const Dilay = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 180px
`
const RightSide = styled.div`

`    
const HandIcon = styled.div`
  
`

const Latest = styled.div`
  
`