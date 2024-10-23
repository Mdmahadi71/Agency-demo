import React from 'react'
import Banner from '../Components/Banner'
import MarketingCon from '../Components/MarketingCon'
import Developerzoon from '../Components/Developerzoon'
import Reason from '../Components/Reason'
import Pricing from '../Components/Pricing'
import Appointment from '../Components/Appointment'
import Quality from '../Components/Quality'
import Member from '../Components/Member'
import Articles from '../Components/Articles'

const Home = () => {
  return (
    <div>
      <Banner/>
      <MarketingCon/>
      <Developerzoon/>
      <Reason/>
      <Pricing/>
      <Appointment/>
      <Quality/>
      <Member/>
      <Articles/>
    </div>
  )
}

export default Home
