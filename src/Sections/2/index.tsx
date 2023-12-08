// import { InlineWidget } from "react-calendly";

const Section2 = () => (
  <div class="p-[17px] pt-[50px] md:px-[38px] md:pt-[93px] md:pb-[62px] xl:p-[100px] xl:py-[140px] xl:pb-[95px]">
    <div>
      <div
        id="asesoria"
        class=" relative flex flex-col xl:flex-row font-bold bg-[#051B28] text-white
            rounded-xl xl:rounded-3xl gap-[25px] md:gap-[53px] lg:gap-[66px]
            p-4 pt-8 pb-[42px] md:px-12 md:pt-20 xl:px-14 xl:pr-8 xl:py-20 xl:pb-16 
          "
      >
        <div
          class="
              absolute 
              -top-5 md:-top-8 xl:-top-8 left-2/4 -translate-x-2/4
              flex items-center justify-center
              h-9 md:h-16 xl:h-16 w-[288px] md:w-[560px] xl:w-max
              font-bold rounded-xl text-xs md:text-xl xl:text-2xl text-center 
              text-[#092435] xl:leading-[45px] font-gopher
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
              py-1 md:px-8 xl:px-8
            "
        >
          ¡¡ Toma acción y responsabilidad, no es <br class="md:hidden" />{" "}
          casualidad que hayas llegado hasta aquí !!
        </div>
        <div class="flex flex-col gap-4 md:gap-[28px] xl:gap-[17px] w-full lg:w-[566px]">
          <div
            class="font-gopher md:pr-9 lg:pr-0
                text-3xl md:text-[42px] md:leading-[50px] xl:text-[42px] leading-[30px] xl:leading-[54px] 
                xl:w-[520px]
                bg-clip-text text-transparent bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
              "
          >
            Querido viajero y sembrador en el tiempo,
          </div>
          <div
            class="
                flex flex-col gap-4 md:gap-[17px] font-normal  xl:w-[513px]
                px-2 pr-3 md:px-0 xl:p-0 
                text-base md:text-[18px] xl:text-lg 
                leading-[21px] md:leading-[25px] xl:leading-[25px] 
              "
          >
            <p>
              Si sientes que ya es hora de que despiertes a tu verdadero
              potencial, que te permitas florecer en la plenitud de tu ser, que
              descubras tu propósito y vayas en búsqueda de tu mejor versión.
            </p>
            <p>
              Escoge el plan que mejor se adapte a tu necesidad y empecemos a
              darle un cambio radical a tu vida.
            </p>
            <p>
              O si todavía no te sientes seguro de tu decisión, agenda una
              charla conmigo y exploremos juntos que es lo que no te permite
              iniciar.
            </p>
          </div>
          <div class="flex justify-center md:justify-start  xl:items-start xl:justify-start mt-3">
            <button
              class="
                  flex items-center justify-center uppercase text-center
                  w-full md:w-auto px-4 h-10 font-bold
                  border-2 rounded-md border-[#2ABA64] tracking-[.15em]
                "
            >
              Quiero ver los planes
            </button>
          </div>
        </div>
        <div class=" pl-1 w-full h-[490px] md:h-[600px] xl:h-[453px] box-content xl:p-0 rounded-2xl overflow-hidden">
          {/* <InlineWidget
              url="https://calendly.com/jonaperezme"
              styles={{ height: window.innerWidth > 1200 ? "453px" : "100%" }}
            /> */}
        </div>
      </div>
    </div>
  </div>
);

export default Section2;
