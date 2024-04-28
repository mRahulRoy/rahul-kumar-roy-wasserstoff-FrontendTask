"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay";

import { Image, Typography } from 'antd'
import React from 'react'
import ImageCard from "./image-card";
import CollectionCarousel from "./collection-carousel";

const users = [
    "/users/user1.png",
    "/users/user2.png",
    "/users/user3.png",
    "/users/user4.png",
    "/users/user5.png",
]

const images = [
    {
        image: "/events/Frame1261154672.png",
        date: "2024 ",
        heading: "collectibles"
    },
    {
        image: "/events/Frame1261154672.png",
        date: "2029 ",
        heading: "collectibles"
    },
    {
        image: "/events/Frame1261154672.png",
        date: "2024 ",
        heading: "collectibles"
    },

]


const Collections = () => {
    return (
        <div className="p-6">
            <Typography className="text-legend text-white font-bold">Explore Youre First <br /> Collectible</Typography>
            <div>
                <h1 className="text-legend font-bold text-5xl mt-[30px] text-white" >Meta <br /> Lives</h1>
                <h2 className="text-legend font-bold text-2xl mt-[30px] text-white" >Live in Astrix</h2>
                <p className="text-white w-[250px] mt-4">Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.  </p>
            </div>

            <div className='mt-2 flex '>
                {
                    users.map((user,i) => {
                        return <Image preview={false}  key={user+i} alt={user} src={user} height={20} style={{ marginLeft : i == 0 ? "0" : `-${5*i}px` }} width={20} />
                    })
                }
                <Typography className='mx-1 text-white font-legend'>22k people interested</Typography>
            </div>

            {/* artists section */}
            <div>
                <h3 className="mt-[20px]    text-white text-xl text-legend">Collectibles</h3>
                <div className="mt-5">
                    <Carousel plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}>
                        <Carousel>
                            <CarouselContent>
                                {
                                    images?.map((img) => {
                                        return <CarouselItem className=" md:basis-1/3" key={img.heading} >
                                            <CollectionCarousel image={img.image} date={img.date} heading={img.heading} />
                                        </CarouselItem>
                                    })
                                }

                            </CarouselContent>
                        </Carousel>
                    </Carousel>
                </div>
            </div>


            {/* Wishlist button */}
            <div className="mt-[20px] flex w-full  md:justify-end justify-start">
                <button className="bg-gold p-2 font-bold text-xl rounded-lg font-legend ">Join Wishlist</button>
            </div>

        </div>
    )
}

export default Collections
