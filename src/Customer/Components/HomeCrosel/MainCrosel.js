import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCroselData } from './MainCroselData';
const MainCrosel = () => {
    const items = MainCroselData.map((item)=>{
        return <img src={item.image} alt="" className='cursor-pointer' role='presentation' />});
  return (
    <div>
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    </div>
  )
}

export default MainCrosel;
