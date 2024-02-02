
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import Image from 'next/image'


export default function Page() {
  return (


  <div>

<div className='' >
            <Image
              className="object-cover w-screen "
              src="/varan_slide_01.jpg"
              alt="Main Slide"
              width={900}
              height={2500}
            />


       
        </div>

  <Hero />;
  <Intro />
  </div>
  )
}
