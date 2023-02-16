import React from 'react'
import Klogo from "../assets/klogo";

const Services = () => {
  return (
    <div>
        <div className="flex justify-between items-center max-w-[1280px] mx-auto text-[#C3FF00] px-10 mb-32">
        <Klogo />
        <a className="hidden md:flex text-2xl" href="">
        {" <contact/> "}
        </a>

        {/* cards */}

        </div>
        <div className='flex items-center justify-center container mx-auto p-10'>
        <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div>
                <div className='p-5 flex flex-col bg-[#121315] rounded-xl'>
                    <h5 className='text-[#FF0073] text-2xl font-bold mt-3 mb-10'> {'<Desarrolo Web/>'}</h5>
                    <p className='text-[#dcdcdc] text-lg '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis. Illo, ullam cum molestias, eos recus</p>
                </div>
            </div>

            <div>
                <div className='p-5 flex flex-col bg-[#121315] rounded-xl'>
                    <h5 className='text-[#FF0073] text-2xl font-bold mt-3 mb-10'> {'<Desarrolo de aplicaciones/>'}</h5>
                    <p className='text-[#dcdcdc] text-lg '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis. Illo, ullam cum molestias, eos recus</p>
                </div>
            </div>

            <div>
                <div className='p-5 flex flex-col bg-[#121315] rounded-xl '>
                    <h5 className='text-[#FF0073] text-2xl font-bold mt-3 mb-10'> {'<Desarrolo mobile/>'}</h5>
                    <p className='text-[#dcdcdc] text-lg '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis. Illo, ullam cum molestias, eos recus</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services