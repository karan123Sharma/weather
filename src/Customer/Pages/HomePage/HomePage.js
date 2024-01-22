import React from 'react'
import MainCrosel from '../../Components/HomeCrosel/MainCrosel'
import HomeSectionCrosel from '../../Components/HomeSectionCrosel/HomeSectionCrosel'

const HomePage = () => {
  return (
    <div>
      <MainCrosel/>
      <div className="space-y-10 py-20 flex flex-col">
        <HomeSectionCrosel/>
      </div>
    </div>
  )
}

export default HomePage
