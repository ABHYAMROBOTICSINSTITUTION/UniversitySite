import AcademicBanner from '@/components/PageComponents/AcademicSection/AcademicBanner'
import AcademicFaculty from '@/components/PageComponents/AcademicSection/AcademicFaculty'
import AcademicProgram from '@/components/PageComponents/HomeSection/AcademicProgram'
import React from 'react'

function page() {
  return (
    <div>
       <AcademicBanner/> 
       <AcademicProgram/>
       <AcademicFaculty/>
    </div>
  )
}

export default page