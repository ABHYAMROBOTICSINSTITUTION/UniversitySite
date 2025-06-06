import AcademicExcellence from '@/components/PageComponents/AboutSchoolSection/AcademicExcellence'
import FacultySpotlight from '@/components/PageComponents/AboutSchoolSection/FacultySpotlight'
import SchoolBanner from '@/components/PageComponents/AboutSchoolSection/SchoolBanner'
import SchoolHistory from '@/components/PageComponents/AboutSchoolSection/SchoolHistory'
import AcademicProgram from '@/components/PageComponents/HomeSection/AcademicProgram'
import React from 'react'

function page() {
  return (
    <div>
        <SchoolBanner/>
        <SchoolHistory/>
        <AcademicExcellence/>
        <FacultySpotlight/>
        <AcademicProgram/>
       
    </div>
  )
}

export default page