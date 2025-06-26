import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import BestSeller from '../components/BestSeller.jsx'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home