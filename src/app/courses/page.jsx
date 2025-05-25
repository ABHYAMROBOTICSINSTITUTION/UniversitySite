import AvailableCourses from '@/components/PageComponents/CourseSection/AvailableCourses'
import CourseBanner from '@/components/PageComponents/CourseSection/CourseBanner'
import React from 'react'

function page() {
  return (
    <div>
        <CourseBanner/>
        <AvailableCourses/>
    </div>
  )
}

export default page