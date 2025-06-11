import AdmissionProcess from "@/components/PageComponents/PreUniversitySection/AdmissionProcess";
import ApplyForm from "@/components/PageComponents/PreUniversitySection/ApplyForm";
import HowToApply from "@/components/PageComponents/PreUniversitySection/HowToApply";
 import PreUniversityIntro from "@/components/PageComponents/PreUniversitySection/PreUniversityIntro";
import StreamsAvailable from "@/components/PageComponents/PreUniversitySection/StreamsAvailable";
import WhyChooseUs from "@/components/PageComponents/PreUniversitySection/WhyChooseUs";


function page() {
  return (
      <div className="w-11/12 mt-24 mx-auto grid md:grid-cols-3 gap-20 py-16 md:py-24">
        <div className="md:col-span-2 space-y-8">
          <PreUniversityIntro />
          <WhyChooseUs />
          <StreamsAvailable />
          <AdmissionProcess />
        </div>
        <div className="space-y-4">
          <ApplyForm />
          <HowToApply />
        </div>
      </div>

  );
}

export default page;
