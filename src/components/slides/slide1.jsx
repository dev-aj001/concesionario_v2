import { Button } from "@nextui-org/react";

export default function () {
    return (
        <div className="relative w-full h-full flex justify-center">
            {/* Imagen de fondo */}
            <img
                alt="Main Carousel Image 1"
                src="/imgs/imgMainCarousel01.png"
                className="w-full h-full object-cover"
            />

            {/* Gradiente oscuro sobre la imagen */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>

            {/* Contenedor de texto y botones */}
            <div className="absolute top-[65%] lg:top-3/4 left-2 sm:left-10 transform -translate-y-1/2 text-center sm:text-left text-white z-10 scale-[0.75] sm:scale-100">
                <h2 className="text-5xl font-bold mb-4">Bienvenidos a nuestro sitio web</h2>
                <p className="text-2xl mb-6 ">Descubre nuestras ofertas y productos exclusivos</p>
                <Button color="#FFB457" variant="ghost" size="lg" className="mr-4">
                    Ver autos
                </Button>
                <Button color="#d87442" variant="ghost" size="lg">
                    Quiero vender mi auto
                </Button>
            </div>
        </div>
    );
}
