import AcademicProgram from '@/components/PageComponents/HomeSection/AcademicProgram'
import Advantage from '@/components/PageComponents/HomeSection/Advantage'
import Events from '@/components/PageComponents/HomeSection/Events'
import HomeBanner from '@/components/PageComponents/HomeSection/HomeBanner'
import Testimonials from '@/components/PageComponents/HomeSection/Testimonials'
import Partners from '@/components/PageComponents/HomeSection/Partners'
import Welcome from '@/components/PageComponents/HomeSection/Welcome'
import WhyUs from '@/components/PageComponents/HomeSection/WhyUs'
import React from 'react'
import Faq from '@/components/PageComponents/HomeSection/Faq'

function page() {
  return (
    <div className="w-full max-w-[100vw] overflow-hidden">
      <div className="w-full mx-auto">
        <HomeBanner />
        <Welcome />
        <WhyUs/>
        <Advantage />
        <AcademicProgram />
        <Events/>
        <Testimonials/>
         <Partners/>
         <Faq/>
      </div>
    </div>
  )
}

export default page