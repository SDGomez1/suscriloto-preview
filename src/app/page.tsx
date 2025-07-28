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
import { usePostHog } from "posthog-js/react";
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
  const [email, setEmail] = useState("");
  const posthog = usePostHog();
  return (
    <section className="bg-[#FED73E] min-h-svh  pt-4 2xl:pt-10 lg:pb-4 2xl:pb-0 flex flex-col justify-center items-center">
      <div className="px-4 flex flex-col items-center w-full 2xl:justify-center 2xl:h-full">
        <div
          className={`flex w-full flex-col items-center lg:flex-row lg:w-1/2 2xl:w-2/6 ${isSent && "mb-20"}`}
        >
          <Image
            src={logo}
            alt="logo suscrilotto"
            className="h-auto w-3/4 "
          ></Image>
          <Image
            src={construction}
            alt="en construccion"
            className="h-auto w-1/2 lg:w-2/6"
          ></Image>
        </div>
        {isSent ? (
          <>
            <h1 className="uppercase text-[#0C2964] font-bold text-5xl text-center 2xl:text-8xl mb-8">
              ¡Gracias!
            </h1>
            <p className="text-[#0C2964] text-3xl text-center font-medium mb-4 2xl:text-4xl 2xl:mb-10 max-w-[800px]">
              Te avisaremos en cuanto SuscriLotto esté disponible
            </p>
          </>
        ) : (
          <>
            <h1 className="uppercase text-[#0C2964] font-bold text-4xl text-center 2xl:text-5xl">
              ¡Estamos preparando algo increíble!
            </h1>
            <span className="block w-full h-1 bg-[#F20C39] my-4 max-w-[500px] 2xl:my-10"></span>
            <h2 className="uppercase text-[#0C2964]  text-4xl text-center mb-4 2xl:text-5xl 2xl:mb-10">
              LOTERÍA POR <span className="font-bold">SUSCRIPCIÓN</span>
            </h2>
            <p className="text-[#0C2964] text-2xl text-center font-semibold mb-4 2xl:text-4xl">
              Escoge tu número de la suerte y nosotros nos encargamos de todo.
            </p>
            <p className="text-[#0C2964] text-2xl text-center font-semibold mb-4 2xl:text-4xl 2xl:mb-10">
              Juega cada semana, sin filas y desde donde estés.
            </p>
            <div className="w-full bg-[#0D4AA3] px-4 py-10 rounded-2xl mb-4 lg:max-w-1/2 lg:p-10 2xl:h-52 flex flex-col 2xl:gap-10 gap-4">
              <h3 className="font-semibold text-center text-white text-2xl 2xl:text-3xl">
                Déjanos tu correo y sé el primero en enterarte del lanzamiento:
              </h3>
              <div className="flex flex-col gap-4 xl:flex-row">
                <input
                  type="email"
                  placeholder="ejemplo@ejemplo.com"
                  className="py-2 px-4 bg-white w-full rounded-lg disabled:bg-neutral-200 2xl:text-2xl font-bahnschrift font-semibold"
                  disabled={isSent}
                  onChange={(value) => setEmail(value.target.value)}
                />
                <button
                  className={`text-lg text-white rounded-full bg-[#F20C39] font-bold w-full py-4  disabled:bg-neutral-400 2xl:text-2xl shadow-lg 2xl:py-4 ${email !=="" && "cursor-pointer"}`}
                  onClick={() => {
                    if (email !== "") {
                      posthog.capture("user_suscribed", { email: email });

                      setIsSent(true);
                    }
                  }}
                  disabled={email === ""}
                >
                  QUIERO SER DE LOS PRIMEROS
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {!isSent && (
        <div className="h-24 bg-white w-full lg:w-10/12 lg:mx-auto lg:rounded-full 2xl:h-36 lg:shadow-xl 2xl:mt-10 max-w-[1400px]">
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
        </div>
      )}
    </section>
  );
}
