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
  padding-left: 180px;
  line-height: 1.1;

  h2{
    color: #090909;
    font-size: 26pxx;
    font-weight: 600;
  }

  p{
    color: #171717;
    font-size: 100px;
    font-weight: 700;

  }

`
const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`    
const HandIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height: 105px;
  }

`

const Latest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 310px;
  height: 70px;
  border-radius: 70px;
  margin-top: 30px;
  background: #ff4141;
  color: white;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
`