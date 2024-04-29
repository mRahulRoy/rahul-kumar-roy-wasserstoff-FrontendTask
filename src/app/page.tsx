"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "antd";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel"

// Components Imports
import HeroSection from "./(home)/components/hero-section";
import Switch from "./(home)/components/switch";
import ImageCard from "./(home)/components/image-card";
import Events from "./(home)/components/events";
import Collections from "./(home)/components/collections";




// Dummy data for populating in UI
const users = [
  {
    image: "/events/Frame1261154672.png",
    location: "Lunar Palace: ",
    feat: "(ft. Kanye west)"
  },
  {
    image: "/events/Frame 1261154670.png",
    location: "Lunar Palace: ",
    feat: "(ft. Kanye west)"
  },
  {
    image: "/events/Frame 1261154671 (1).png",
    location: "Lunar Palace: ",
    feat: "(ft. Kanye west)"
  },
  {
    image: "/events/Frame 1261154671 (2).png",
    location: "Lunar Palace: ",
    feat: "(ft. Kanye west)"
  }

]



export default function Home() {

  // This state will track/store the user choice between Events and Collections.
  const [showEvents, setShowEvents] = useState<String | null>("events");
  // Since Switches are in different component so i used lifting state up here since App is small instead we can use state managers like redux etc.
  function handleShowEvents(val: string): void {
    setShowEvents(val)
  }

  return (
    <>  
    {/* This section renders the Navbar */}
      <section className="h-screen">
        <div className="container   p-4 ">
          <Link href="/">
            <Image alt="logo" height={"240"} width={240} src={"/Astrix Logo.png"} />
          </Link>
        </div>
        {/* This hero section is the animated component that we see at very first */}
       <div className="flex items-center justify-center  h-full">
       <HeroSection />
       </div>
      </section>


      {/* Main section */}
      <section className=" md:container m-auto border h-auto bg-main p-2 md:p-4">
        <div className="flex w-[100%] p-2 md:w-[70%] flex-col md:flex-row  gap-[50px] m-auto ">
          {/* left container that conatins main carousel */}
          <div className="w-full md:w-1/3">
            <div className="atri-logo flex">
              <Image alt="logo" width={40} height={40} src={"/logos/Astrix Branding.png"} />
              <Image alt="logo" width={100} height={40} src={"/logos/Logo.png"} />
            </div>
            <div className="relative">
              <Typography className="sm:mx-[70px] md:-mx-10 absolute text-[4rem] md:text-[5rem] text-event-txt font-events font-bold l-0 leading-[60px]">
                ASTR <br /> IX <br /> <br /> COLL  <br /> ECTI <br /> BLE
              </Typography>

              <div className="mt-5">
                <Carousel plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}>
                  <CarouselContent>
                    {
                      users.map((user) => {
                        return <ImageCard key={user.image} metaData={user} />
                      })
                    }

                  </CarouselContent>
                  {/* <CarouselPrevious />
                  <CarouselNext /> */}
                </Carousel>
              </div>

              {/* Custom switches to switch between the Events and the Collections */}
              <div className="mx-3  mt-[40px] md:mt-[20px]">
                <Switch handleShowEvents={handleShowEvents} />
              </div>
            </div>
          </div>

          {/* right container for Events and Collections */}
          <div className="w-full md:w-1/2 p-2 flex  gap-3  h-full">

            {/* strip bar */}
            <div className="hidden relative h-screen w-[20px] md:w-[40px]">
              <p className=" relative origin-left w-[561px] text-center items-center justify-center text-[9px] left-0 overflow-hidden flex gap-3 rotate-90 -mt-[20px] border font-krona bg-light-blue p-3 font-semibold">Event : Oasis Bus tour , JLN Stadium , Delhi  <Image src={"/star.png"} alt="star" height={10} width={10} /> Collection Live : Meta Lives , live on astrix</p>
            </div>

            {/* Conditionaly rendering the Events or Collection component based on user selection, By default it be Events */}
            {
              showEvents == "events" ? <Events /> : <Collections />
            }
          </div>

        </div>
      </section>

    </>
  );
}
