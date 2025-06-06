import CollegeBanner from '@/components/PageComponents/AboutCollegeSection/CollegeBanner'
import CollegeFacilities from '@/components/PageComponents/AboutCollegeSection/CollegeFacilities'
import StudentLife from '@/components/PageComponents/AboutCollegeSection/StudentLife'
import VirtualTour from '@/components/PageComponents/AboutCollegeSection/VirtualTour'
import React from 'react'

function page() {
  return (
    <div>
        <CollegeBanner/>
        <CollegeFacilities/>
        <VirtualTour/>
        <StudentLife/>
    </div>
  )
}

export default page