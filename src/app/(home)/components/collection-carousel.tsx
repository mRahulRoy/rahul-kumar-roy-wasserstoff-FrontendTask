import { Image, Typography } from 'antd'
import React from 'react'

const CollectionCarousel = ({image,date,heading}:{image:string,date:string,heading:string}) => {
  return (
    <div className=" rounded-xl bg-light-blue w-[50%] sm:w-[50%]  md:w-[130px] p-3 flex items-center justify-center flex-col">
    <div className="flex mb-2 w-full justify-between items-center ">
        <span className="inline-block p-2 text-[8px] rounded-xl  bg-black text-white font-legend">{date}</span>
        <span className="inline-block p-1  text-black font-legend">By Pablo</span>
    </div>
    <Typography className="text-black mb-2 font-legend">{heading}</Typography>
    <div className='w-[full] sm:w-[80px] sm:h-[100%] flex items-center justify-center'>
         <Image  preview={false} src={image} alt="img" width={"50%"}  className='w-full rounded-sm' />
    </div>

</div>
  )
}

export default CollectionCarousel
