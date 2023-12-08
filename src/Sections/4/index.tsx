"use client";

import { createEffect, createSignal } from "solid-js";
import "./style.css";
import useDeviceSize from "../useDeviceSize";

const CardsInfo = [
  {
    imgSrc: "/section4/section-4-1.png",
    title: "Tu luz adecuada",
    content:
      "Cuál es su fuente, cuál es la luz que ilumina tu vida, tu camino, tu viaje y te proporciona todo de manera divina y perfecta.",
  },
  {
    imgSrc: "/section4/section-4-2.png",
    title: "Tu agua de vida",
    content:
      "Es esencial en nuestra nutrición y vitalidad, en nuestra fluidez y adaptabilidad, en nuestra purificación y renovación, en nuestra fuerza y perseverancia.",
  },
  {
    imgSrc: "/section4/section-4-3.png",
    title: "Tu nueva humanidad",
    content:
      "En esta amplia gama de sensaciones, como esa luz que nos ilumina en todo momento, ese cuerpo que nos ha sido entregado para respetarlo, cuidarlo y protegerlo, esa agua de vida que consumimos y ese aire sano y limpio que respiramos para encontrar ese propósito de vida que nos lleve a ser nuestra mejor versión.",
  },
  {
    imgSrc: "/section4/section-4-4.png",
    title: "Tu cuerpo fértil",
    content:
      "La aceptación y la gratitud, junto con tu diálogo interno positivo, el autoconocimiento y el desarrollo de tu inteligencia emocional, son elementos clave que te impulsarán a un nivel superior en tu vida.",
  },
  {
    imgSrc: "/section4/section-4-5.png",
    title: "Tu aire nutritivo",
    content:
      "Identificar y aceptar el aire que nos nutre, que acompaña nuestro ser y nos permite respirar con paz y tranquilidad. Este entorno de relaciones significativas y sólidas.",
  },
];

const Card = ({
  imgSrc,
  title,
  content,
  favorite,
}: {
  imgSrc: string;
  title: string;
  content: string;
  favorite?: boolean;
}) => {
  const [isSmall, setIsSmall] = createSignal(false);

  createEffect(() => {
    setIsSmall(window.innerWidth <= 1024);
  });

  return (
    <div
      class={` card-s4 cursor-pointer
        flex flex-col relative group
        items-center w-[330px]
        ${favorite ? "h-[355px]" : "h-[315px]"} 
        overflow-hidden rounded-xl shadow-[0_0_30px_0_rgba(0,0,0,0.25)]
      `}
    >
      <img
        class={`relative ${
          !isSmall() ? "hover:image" : "default-card-section-4-image"
        }`}
        src={imgSrc}
        alt={title}
      />

      <div
        class={`
          absolute min-h-[170px] bottom-0 text-white
          ${!isSmall() ? "hover:text" : "default-card-section-4-text"}
          px-[18px] py-[9px] pb-[18px] cursor-pointer
          ${
            favorite
              ? "bg-gradient-to-t from-[#2ABA64] to-[#3369FF]"
              : "bg-[#092435]"
          } 
        `}
      >
        <div
          class={`
            font-bold text-xl cursor-pointer
            ${
              favorite
                ? "text-black"
                : `bg-clip-text text-transparent bg-gradient-to-r from-[#2ABA64] to-[#3369FF]`
            } 
          `}
        >
          {title}
        </div>
        <div class="text-[13px] cursor-pointer">{content}</div>
      </div>
    </div>
  );
};

const Section4 = () => {
  const [innerWidth, setInnerWidth] = createSignal(0);

  createEffect(() => {
    setInnerWidth(window.innerWidth);
  });

  return (
    <div
      id="metodo"
      class="
        relative flex flex-col min-h-[800px] 
        py-1 pb-[35px] md:pt-[46px] xl:py-[88px] xl:pb-[100px] 
        gap-5 md:gap-[37px] xl:gap-[40px]
      "
    >
      <div
        class={`absolute xl:w-[350px] xl:h-[570px] top-[333px]`}
        style={{ left: innerWidth() / 2 - 175 + "px" }}
      >
        <img
          src="/section4/vector-section-4.png"
          alt="puntos de coneccion"
          class="absolute hidden xl:flex left-0 top-0 h-[83px]"
        />
        <img
          src="/section4/vector-section-4.png"
          alt="puntos de coneccion"
          class="absolute hidden xl:flex top-0 right-0 -scale-x-100"
        />
        <img
          src="/section4/vector-section-4.png"
          alt="puntos de coneccion"
          class="absolute hidden xl:flex bottom-0 left-0 h-[83px] -scale-y-100"
        />
        <img
          src="/section4/vector-section-4.png"
          alt="puntos de coneccion"
          class="absolute hidden xl:flex bottom-0 right-0 h-[83px] -scale-x-100 -scale-y-100"
        />
      </div>

      <div
        class="absolute bottom-[220px] w-[620px] h-[112px] m-auto hidden md:flex xl:hidden"
        style={{ left: innerWidth() / 2 - 312 + "px" }}
      >
        <img
          src="/section4/vector-section-4.png"
          alt="puntos de coneccion"
          class="absolute rotate-90 -scale-y-100 left-0 top-0"
        />
        <img
          src="/section4/vector-section-4.png"
          alt="puntos de coneccion"
          class="absolute rotate-90 right-0 top-0"
        />
      </div>

      <div
        class=" 
          w-max m-auto text-center font-bold
          text-2xl md:text-[45px] xl:text-6xl
          tracking-[.04rem] xl:tracking-[.10rem]
          md:leading-[42px]
        "
      >
        <div
          class=" 
          relative after:content-[''] after:absolute 
          after:bottom-[0px] xl:after:bottom-[-10px] after:left-0  
          after:h-[6px] xl:after:h-[10px] after:w-full
          after:bg-gradient-to-r after:from-[#2ABA64] after:to-[#3369FF] "
        >
          Método de transformación
        </div>
        <div class="xl:mt-4">enfocado en descubrir:</div>
      </div>

      <div
        class="
          hidden xl:flex gap-5
          m-auto xl:gap-[36px]
          items-center mt-1
        "
      >
        <div
          class="
            flex flex-col gap-5 xl:gap-[68px]
            items-center
          "
        >
          <Card {...CardsInfo[0]} />
          <Card {...CardsInfo[1]} />
        </div>

        <div
          class="
              flex flex-col gap-10
              items-center
            "
        >
          <Card {...CardsInfo[2]} favorite />
        </div>

        <div
          class="
            flex flex-col gap-5 xl:gap-[68px]
            items-center
          "
        >
          <Card {...CardsInfo[3]} />
          <Card {...CardsInfo[4]} />
        </div>
      </div>

      <div class="hidden md:flex xl:hidden flex-col items-center md:gap-[25px] ">
        <div class="flex md:gap-[25px]">
          <div class="flex flex-col md:gap-[25px]">
            <Card {...CardsInfo[0]} />
            <Card {...CardsInfo[1]} />
          </div>
          <div class="flex flex-col md:gap-[25px]">
            <Card {...CardsInfo[3]} />
            <Card {...CardsInfo[4]} />
          </div>
        </div>
        <div>
          <Card {...CardsInfo[2]} favorite />
        </div>
      </div>

      <div class="flex md:hidden flex-col items-center gap-[20px]">
        <Card {...CardsInfo[0]} />
        <Card {...CardsInfo[1]} />
        <Card {...CardsInfo[3]} />
        <Card {...CardsInfo[4]} />
        <Card {...CardsInfo[2]} favorite />
      </div>
    </div>
  );
};

export default Section4;
