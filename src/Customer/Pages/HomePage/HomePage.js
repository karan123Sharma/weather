import React from 'react'
import { mens_kurta } from '../../../Data/mens_kurta'
import MainCrosel from '../../Components/HomeCrosel/MainCrosel'
import HomeSectionCrosel from '../../Components/HomeSectionCrosel/HomeSectionCrosel'

const HomePage = () => {
  return (
    <div>
      <MainCrosel/>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 ">
        <HomeSectionCrosel data={mens_kurta} sectionName={"Men's Kurta"}/>
      </div>
    </div>
  )
}

export default HomePage
