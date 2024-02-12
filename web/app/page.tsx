
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import NiftyIsland from "@/components/niftyisland/NiftyIsland";
import Image from 'next/image'


export default function Page() {
  return (


  <div>

<div className='' >
            <Image
              className="object-cover w-screen "
              src="/varan_slide_05.jpg"
              alt="Main Slide"
              width={2500}
              height={900}
            />


       
        </div>

  <Hero />;
  <Intro />;

  <NiftyIsland/>

  </div>
  )
}
