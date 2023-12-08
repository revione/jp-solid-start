import { Form } from "./components/Form";

const Section7 = () => {
  return (
    <div
      id="interactuemos"
      class="
        flex flex-col
        md:flex-row-reverse
        gap-[28px]  xl:gap-[45px] 
        px-[21px]   xl:px-[58px]
        py-[30px]   xl:py-[72px] xl:pb-[148px]
      "
    >
      <div
        class="
          flex flex-col
        bg-[#FFFAEB]
          py-[31px] xl:py-[38px]
          px-[16px] xl:px-[38px]
          shadow-2xl rounded-xl
          md:w-1/2
        "
      >
        <div class="text-center font-black text-[24px] xl:text-[42px] font-gopher w-fit m-auto">
          Inspiración
          <div
            class="h-[4px] xl:h-[8px] w-full -mt-1
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
            "
          />
        </div>

        <div
          class="relative
            bg-[#071E2C] rounded-lg text-whit 
            p-[13px] xl:p-[22px] xl:pb-[27px]
            mt-[11px] xl:mt-[20px]
          "
        >
          <div
            class=" text-[#FFFEFA]
              text-[10px] 
              leading-[14px]
              tracking-[0.17px]

              xl:text-[19px]
              xl:leading-[25px]
              xl:tracking-[0px]
            "
          >
            Hoy arde de nuevo. Que ardan tus sueños, tu ser, tu sonrisa, tu alma
            y espíritu. Prende a alguien más, no ilumines nada más. Dale calor a
            los que transitan el invierno de la soledad y tristeza. Apuesta
            todas tus fichas a Dios.
            <br /> Lo que se apagó de pie, préndelo de rodillas.
          </div>
          <div
            class="
              text-[11px] xl:text-[18px] w-fit
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF] text-transparent bg-clip-text
            "
          >
            - Daniel Habif -
          </div>
          <img
            src="/section7/vector-section-7.svg"
            alt="vector"
            class="
              absolute
              -bottom-[35px] xl:-bottom-[48px]
              left-[34px]    xl:left-[67px]
              scale-50 xl:scale-100
            "
          />
        </div>

        <img
          src="/section7/profil-section-7.png"
          alt="profil"
          class="
              -mt-[8px] xl:mt-[30px]
              m-auto
              scale-[0.81] xl:scale-100
            "
        />
        <div
          class="h-[6px] xl:h-[11px] w-[95%] m-auto -mt-[5px] z-10
              bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
            "
        />
      </div>
      <div class="rounded-xl bg-gradient-to-t from-[#2ABA64] to-[#3369FF] py-[25px] xl:py-[35px] xl:pb-[45px] md:w-1/2">
        <Form />
      </div>
    </div>
  );
};

export default Section7;
