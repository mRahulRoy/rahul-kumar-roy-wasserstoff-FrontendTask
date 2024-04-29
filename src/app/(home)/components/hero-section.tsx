import React from 'react'
import { Image } from 'antd'

// This component renders the animated texts.
const HeroSection = () => {
    return (
        <div className='container flex items-center justify-center -mt-[45px]' >
            <div style={{ width: "auto" }} className='flex justify-center  flex-col  '>
                <div className='mb-0 flex gap-3 items-center '>
                    <h3 className=' text-1xl md:text-3xl font-bold'>WE</h3>
                    <Image preview={false} src={"/image 143.png"} width={"40%"}  style={{ height: "37px" }} alt='bg-image' />
                    <h3 className=' text-1xl md:text-3xl -ml-12 h-[37px] font-bold p-2 slide1 bg-white'>ORGANIZE THE</h3>
                </div>
                <div className='mb-0 flex gap-3 items-center mt-2'>
                    <h3 className=' text-1xl md:text-3xl font-bold'>CONNECTION</h3>
                    <Image preview={false} src={"/image 141.png"} width={"40%"}  style={{ height: "37px" }} alt='bg-image' />
                    <h3 className='slide2 h-[37px] text-1xl md:text-3xl w-[150px] -ml-12 font-bold p-2 slide1 bg-white'></h3>
                </div>
                <div className='mb-0 flex gap-2 items-center mt-2'>
                    <Image preview={false} src={"/Frame-1261154653.png"} width={"40%"}  style={{ height: "37px" }} alt='bg-image' />
                    <div className='slide3 text-1xl md:text-3xl font-bold flex'>
                        <h3 className=' h-[37px] text-1xl md:text-3xl  -ml-12 font-bold p-2  bg-white'>BETWEEN</h3>
                        <Image preview={false} src={"/Frame 1261154660.png"} width={"40%"}  style={{ height: "37px" }} alt='bg-image' />
                        <h3 className='h-[37px] text-1xl md:text-3xl w-[150px] -ml-1 font-bold p-2  bg-white'>MUSIC</h3>
                    </div>
                </div>
                <div className='mb-0 flex gap-3 items-center mt-2'>
                    <h3 className=' h-[37px] text-1xl md:text-3xl font-bold p-2  bg-white'>ARTIST</h3>
                    <Image preview={false} src={"/Frame 1261154661.png"} width={"40%"}  style={{ height: "37px" }} alt='bg-image' />

                    <div className='slide2 text-1xl md:text-3xl font-bold flex'>
                        <h3 className='h-[37px] text-1xl md:text-3xl  -ml-12 font-bold p-2  bg-white'>CULTURE</h3>
                        <Image preview={false} src={"/Frame 1261154662.png"} width={"40%"}  style={{ height: "37px" }} alt='bg-image' />
                    </div>
                </div>
                <div className='mb-0 flex gap-3 items-center mt-2'>
                    <Image preview={false} src={"/Frame 1261154663.png"} width={"30%"}  style={{ height: "37px" }} alt='bg-image' />
                    <div className='slide3 text-1xl md:text-3xl font-bold flex'>
                        <h3 className=' h-[37px] text-1xl md:text-3xl  -ml-12 font-bold p-2  bg-white'>ART</h3>
                        <Image preview={false} src={"/Frame 1261154664.png"} width={"40%"}  style={{ height: "37px" }} alt='bg-image' />
                        <h3 className='h-[37px] text-1xl md:text-3xl flex items-center  font-bold   bg-white'> COLLECTION</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
