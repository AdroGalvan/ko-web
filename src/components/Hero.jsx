import React from "react";

const Hero = () => {
    return (
        <div>
            <div className="max-w-[960px] mt-[100px] w-full mb-32 mx-auto flex-col p-4">
                <p className="text-[#00FFFD] font-bold  mb-12 md:text-3xl sm:text-2xl">
                    We solve your digital problems.
                </p>
                <h1 className="text-[#b1afaf] ml-10 md:text-xl sm:text-lg">
                    Planificamos, estructuramos e implementamos soluciones digitales que
                    sean de gran utilidad para cada cliente. Contamos con un equipo
                    multidisciplinario y capacitado para desarrollar software y productos
                    de alta complejidad que se trabaja en común acuerdo con la necesidad
                    del negocio.
                </h1>
                <button className="border text-[#C3FF00] font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-[#C3FF00] hover:text-black transition-all duration-300 w-[200px] text-xl my-6 mx-auto ml-10 mt-16"> get started </button>
            </div>
        </div>
    );
};

export default Hero;
