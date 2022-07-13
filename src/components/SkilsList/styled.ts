import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 60px 15%;
  text-align: center;

  background-color: black;

  box-shadow: inset 2px 89px 59px -134px rgba(255,255,255,1);

  display: flex;
  flex-direction: column;
  align-items: center;

  .swiper {
    padding: 32px;
    width: 600px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    flex-direction: column;
    gap: 8px;
  }

  .swiper-pagination-bullet {
    background-color: white;
    width: 8px;
    height: 8px;
  }

  .swiper-pagination-bullet-active {
    background-color: red;
    border: 1px solid white;
  }

  @media (max-width: 880px){
    
    padding: 60px 5%;
    .swiper {
      width: 100%;
    }
  }
`

export const Title = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, .5 );
  color: #FFF;

  margin-bottom: 36px;

  padding: 16px;
  border-bottom: 1px solid red;
  
  box-shadow: -15px -1px 145px 3px rgba(56,53,56,1);
  font-size: 24px;

  border-radius: 8px;;
`

export const IconTitle = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`

