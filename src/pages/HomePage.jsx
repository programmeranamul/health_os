import React from 'react'
import HomePageHeader from './../components/Home/HomePageHeader';
import HomePageCards from './../components/Home/HomePageCards';
import HomeFilter from './../components/Home/HomeFilter';
import { useState } from 'react';

function HomePage() {

const [showFilter, setShowFilter] = useState(false)

  return (
    <>
    <HomePageHeader showFilter={showFilter} setShowFilter={setShowFilter}/>
    <HomePageCards />
   <div className='container'>
   <HomeFilter showFilter={showFilter} setShowFilter={setShowFilter}/>
   </div>
    </>
  )
}

export default HomePage