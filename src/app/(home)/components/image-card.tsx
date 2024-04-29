import { CarouselItem } from '@/components/ui/carousel';
import { Typography,Image } from 'antd';
import React from 'react'
interface propTypes {
    location: string;
    feat:string;
    image:string;
}
const ImageCard = ({metaData }: { metaData: propTypes }) => {
    return (
      
            <CarouselItem className="flex flex-col md:items-start items-center justify-center h-[450px]">
                <Typography className='font-legend text-white text-3xl font-bold'>{metaData.location}</Typography>
                    <span className='font-legend text-white text-xl font-bold'>{metaData.feat}</span>
                <Image src={metaData.image} className='mt-2' alt="image" width={250}  />
            </CarouselItem>
        
    )
}

export default ImageCard
