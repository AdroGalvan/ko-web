import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='max-w-[960px] mt-[100px] w-full h-screen mx-auto flex-col md:text-2xl sm:text-1xl p-4'>
            <p className='text-[#00FFFD] font-bold mb-12'> We solve your digital problems. </p>
            <h1 className='text-[#8C8C8C] text-2xl ml-10'> Planificamos, estructuramos e implementamos soluciones digitales que sean de gran utilidad para cada cliente. Contamos con un equipo multidisciplinario y capacitado para desarrollar software y productos de alta complejidad que se trabaja en común acuerdo con la necesidad del negocio.</h1>
            <button className='border text-[#C3FF00] font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-[#C3FF00] hover:text-black transition-all duration-300 w-[200px] text-xl my-6 mx-auto ml-10 mt-16'> get started </button>
        </div>    
    </div>
  )
}
 
export default Hero
