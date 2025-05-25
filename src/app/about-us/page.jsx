import AboutBanner from '@/components/PageComponents/AboutSection/AboutBanner'
import AboutUsTestimonial from '@/components/PageComponents/AboutSection/AboutUsTestimonial'
import OurFounders from '@/components/PageComponents/AboutSection/OurFounders'
import Journey from '@/components/PageComponents/AboutSection/OurJourney'
import VisionAndMission from '@/components/PageComponents/AboutSection/VisionandMission'
import WhoWeAre from '@/components/PageComponents/AboutSection/WhoWeAre'
import React from 'react'

function page() {
  return (
    <div>
        <AboutBanner/>
        <WhoWeAre/>
        <VisionAndMission/>
        <Journey/>
        <OurFounders/>
        <AboutUsTestimonial/>
    </div>
  )
}

export default page