import styled from 'styled-components'

export const Wrapper = styled.div`
  gap: 30px;
  height: fit-content;
  color: #fff;
  background-color: black;

  box-shadow: inset 0px 15px 23px -20px rgba(255,0,13,.5), inset 0px -15px 23px -20px rgba(255,0,13,.5);


  display: flex;
  align-items: center;
  justify-content: center;

  
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    margin: 16px 0 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    
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
`

export const Title = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 1 );
  color: #FFF;

  margin-bottom: 36px;

  padding: 16px;
  border-bottom: 1px solid red;
  
  box-shadow: -15px -1px 145px 3px rgba(56,53,56,1);
  font-size: 24px;

  border-radius: 8px;;
`

export const WrapperData = styled.div`
  width:100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  
  background-color: rgba(0,0,0,.85);

  padding: 60px 0;

  flex-direction: column;
`

export const ImageWrapper = styled.img`
  border-radius: 8px;
  box-shadow: 0px 20px 30px 3px rgba(56,53,56,.2);
  width: 438px;
  height: 309px;

  margin: 0 16px;

  transition: .4s;
  border-radius: 8px;

  box-shadow: 0px 20px 30px 3px rgba(0,0,0,.3);

  @media (max-width: 500px){
    height: 220px;
  }

  @media (max-width: 380px){
    height: 200px;
  }
`