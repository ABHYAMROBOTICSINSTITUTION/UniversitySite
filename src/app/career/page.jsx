import CareerBanner from '@/components/PageComponents/CareerSection/CareerBanner'
import JobPositionDropdown from '@/components/PageComponents/CareerSection/JobPositionDropdown'
import React from 'react'

function page() {
  return (
    <div>
        <CareerBanner/>
        <JobPositionDropdown/>
    </div>
  )
}

export default page