import { Image, Typography } from 'antd'
import React from 'react'

const CollectionCarousel = ({image,date,heading}:{image:string,date:string,heading:string}) => {
  return (
    <div className=" rounded-xl bg-light-blue w-[130px] p-3 flex items-center justify-center flex-col">
    <div className="flex mb-2 w-full justify-between items-center ">
        <span className="inline-block p-2 text-[8px] rounded-xl  bg-black text-white font-legend">{date}</span>
        <span className="inline-block p-1  text-black font-legend">By Pablo</span>
    </div>
    <Typography className="text-black mb-2 font-legend">{heading}</Typography>
    <Image  src={image} alt="img" height={80} width={80} />

</div>
  )
}

export default CollectionCarousel
