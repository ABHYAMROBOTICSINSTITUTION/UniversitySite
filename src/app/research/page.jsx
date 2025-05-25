import ResearchBanner from '@/components/PageComponents/ResearchSection/ResearchBanner'
import ResearchHighlight from '@/components/PageComponents/ResearchSection/ResearchHighlight'
import ResearchPartner from '@/components/PageComponents/ResearchSection/ResearchPartner'
import React from 'react'

function page() {
  return (
    <div>
        <ResearchBanner/>
        <ResearchHighlight/>
        <ResearchPartner/>
    </div>
  )
}

export default page