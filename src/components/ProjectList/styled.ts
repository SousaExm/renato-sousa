import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: black;
  color: white;
  padding: 36px 10%;
  
  box-shadow: inset 0px 15px 23px -20px rgba(255,0,13,1);

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    margin: 16px 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next{
    color: red;
  }
  
  .swiper-button-prev{
    color: red;
  }

  @media (max-width: 880px){
    padding: 36px 5%;
  }
`

export const Title = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, .5 );
  color: #FFF;

  margin: 36px  auto;

  text-align: center;
  width: 200px;
 

  padding: 16px;
  border-bottom: 1px solid red;

  
  box-shadow: -15px -1px 145px 3px rgba(56,53,56,1);
  font-size: 24px;

  border-radius: 8px;
`

export const CardsWrapper = styled.div`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`