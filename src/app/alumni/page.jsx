import Alumni from '@/components/PageComponents/AlumniSection/Alumni'
import AlumniBanner from '@/components/PageComponents/AlumniSection/AlumniBanner'
import AlumniProfile from '@/components/PageComponents/AlumniSection/AlumniProfile'
import React from 'react'

function page() {
  return (
    <div className="">
        <AlumniBanner/>
        <Alumni/>
        <AlumniProfile/>
    </div>
  )
}

export default page