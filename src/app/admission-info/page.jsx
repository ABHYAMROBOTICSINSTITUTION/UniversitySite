import AdmissionBanner from '@/components/PageComponents/AdmissionFormSection/AdmissionBanner'
import ContactSection from '@/components/PageComponents/AdmissionFormSection/ContactSection'
import HowToApply from '@/components/PageComponents/AdmissionFormSection/HowToApply'
import React from 'react'

function page() {
  return (
    <div>
        <AdmissionBanner/>
        <HowToApply/>
        <ContactSection/>
    </div>
  )
}

export default page