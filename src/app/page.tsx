"use client";
import logo from "@/assets/img/logo.png";
import boyaca from "@/assets/img/boyaca.png";
import cundinamarca from "@/assets/img/cundinamarca.png";
import huila from "@/assets/img/huila.png";
import mainzales from "@/assets/img/mainzales.png";
import medellin from "@/assets/img/medellin.png";
import risaralda from "@/assets/img/risaralda.png";
import santander from "@/assets/img/santander.png";
import tolima from "@/assets/img/tolima.png";
import valle from "@/assets/img/valle.png";
import construction from "@/assets/img/construction.webp";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const images = [
    { name: "cundinamarca", src: cundinamarca },
    { name: "boyaca", src: boyaca },
    { name: "huila", src: huila },
    { name: "mainzales", src: mainzales },
    { name: "medellin", src: medellin },
    { name: "risaralda", src: risaralda },
    { name: "santander", src: santander },
    { name: "tolima", src: tolima },
    { name: "valle", src: valle },
  ];
  const [isSent, setIsSent] = useState(false);
  return (
    <section className="bg-[#FED73E] min-h-svh  pt-4 2xl:pt-10 pb-4 2xl:pb-0">
      <div className="px-4 flex flex-col items-center w-full 2xl:justify-center 2xl:h-full">
        <div className="flex w-full flex-col items-center lg:flex-row lg:w-1/2 2xl:w-2/6">
          <Image
            src={logo}
            alt="logo suscrilotto"
            className="h-auto w-3/4 "
          ></Image>
          <Image
            src={construction}
            alt="en construccion"
            className="h-auto w-1/2 2xl:w-2/6"
          ></Image>
        </div>
        <h1 className="uppercase text-[#F20C39] font-bold text-4xl text-center 2xl:text-6xl">
          ¡Estamos preparando algo increíble!
        </h1>
        <span className="block w-full h-1 bg-[#F20C39] my-4 max-w-[500px] 2xl:my-10"></span>
        <h2 className="uppercase text-[#0C2964] font-bold text-4xl text-center mb-4 2xl:text-5xl 2xl:mb-10">
          LOTERÍA POR <span className="font-black">SUSCRIPCIÓN</span>
        </h2>
        <p className="text-[#0C2964] text-2xl text-center font-bold mb-4 2xl:text-5xl">
          Escoge tu número de la suerte y nosotros nos encargamos de todo.
        </p>
        <p className="text-[#0C2964] text-2xl text-center font-bold mb-4 2xl:text-5xl 2xl:mb-10">
          Juega cada semana, sin filas y desde donde estés.
        </p>
        <div className="w-full bg-[#0D4AA3] p-4 rounded-2xl space-y-4 mb-4 lg:max-w-1/2 lg:p-10">
          <h3 className="font-bold text-center text-white text-2xl 2xl:text-4xl">
            Déjanos tu correo y sé el primero en enterarte del lanzamiento:
          </h3>
          <div className="flex flex-col gap-4 xl:flex-row">
            <input
              type="email"
              placeholder="ejemplo@ejemplo.com"
              className="border py-2 px-4 bg-white w-full rounded-lg disabled:bg-neutral-200 2xl:text-2xl"
              disabled={isSent}
            />
            <button
              className="text-lg text-white rounded-full bg-[#F20C39] font-bold w-full py-2 disabled:bg-neutral-400 2xl:text-2xl shadow-lg"
              onClick={() => setIsSent(true)}
              disabled={isSent}
            >
              {isSent ? "TE NOTIFICAREMOS" : "QUIERO SER DE LOS PRIMEROS"}
            </button>
          </div>
        </div>
      </div>
      <div className="h-24 bg-white w-full lg:w-10/12 lg:mx-auto lg:rounded-full 2xl:h-36 lg:shadow-xl 2xl:mt-10 ">
        <div className="flex overflow-x-auto h-full space-x-2 p-2 lg:justify-center">
          {images.map((image) => (
            <div key={image.name} className="flex-none aspect-square h-full ">
              <Image
                src={image.src}
                alt={image.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>{" "}
    </section>
  );
}
