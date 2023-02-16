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
        <div className='flex items-center justify-center container mx-auto px-28'>
        <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
                <div className='py-9 px-6 mx-6 flex flex-col bg-[#121315] rounded-xl'>
                    <h5 className='text-[#FF0073] text-2xl mt-3 mb-10'> {'<Desarrolo Web/>'}</h5>
                    <p className='text-[#dcdcdc] text-base  '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis. Illo, ullam cum molestias, eos recus</p>
                </div>
            </div>

            <div>
                <div className='py-9 px-6 mx-6 flex flex-col bg-[#121315] rounded-xl'>
                    <h5 className='text-[#FF0073] text-2xl mb-5'> {'<Desarrolo de aplicaciones/>'}</h5>
                    <p className='text-[#dcdcdc] text-base '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis. Illo, ullam cum molestias, eos recus</p>
                </div>
            </div>

            <div>
                <div className='py-9 px-6 mx-6 flex flex-col bg-[#121315] rounded-xl'>
                    <h5 className='text-[#FF0073] text-2xl'> {'<Desarrolo mobile/>'}</h5>
                    <p className='text-[#dcdcdc] text-base mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis. Illo, ullam cum molestias, eos recus</p>
                </div>
            </div>
        </div>
    </div>
    <div class="pepe">
        <h3 className='flex text-xl text-bold text-[#C3FF00] ml-28 mb-36 >'> {'<Services/>'} </h3>
    </div>
    </div>
  )
}

export default Services