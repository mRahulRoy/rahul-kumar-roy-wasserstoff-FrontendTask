"use client"
import { Image, Typography } from 'antd'
import React from 'react'

const Events = () => {
  return (
    <div className="p-6">
              <Typography className="text-legend text-white font-bold">Explore Youre First <br /> Event</Typography>
              <div>
                <h2 className="text-legend font-bold text-4xl mt-[30px] text-white" >Event Name</h2>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <Image style={{ height: "15px", width: "15px" }} src={"/position.png"} alt="position" /> <span className="text-white">Venue</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <Image style={{ height: "15px", width: "15px" }} src={"/clock.png"} alt="position" /> <span className="text-white">04/3/2024 @19:00</span>
                  </div>

                </div>
                <p className="text-white w-[250px] mt-4">Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>
              </div>

              {/* artists section */}
              <div>
                <h3 className="mt-[30px] text-white text-3xl text-legend">Artist Lineup</h3>
                <div className="images flex gap-2 mt-[40px]">
                  <Image src="/artists/art1.png"  alt="artist" height={"50%"} width={"50%"} />
                  <Image src="/artists/art2.png"  className="scale-[1.2]" alt="artist" height={"50%"} width={"50%"} />
                  <Image src="/artists/art3.png"  alt="artist"height={"50%"} width={"50%"} />
                </div>
              </div>


              {/* qr and buttons */}
              <div className="mt-[20px] flex flex-col gap-5 md:justify-between md:flex-row md:items-end w-full ">
                <Image alt="qr" src="/qr.png" height={80} width={80} />
                <button className="bg-gold w-[150px]  font-bold text-xl rounded-lg p-2 font-legend ">Join Wishlist</button>
              </div>

            </div>
  )
}

export default Events
