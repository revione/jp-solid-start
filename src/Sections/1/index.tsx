import LogotFotosintesis from "/section1/logo-fotosintesis.png";

const Section1 = () => (
  <div
    id="inicio"
    class="flex xl:items-start  
        h-[374px] md:h-[365px] px-[20px] py-[40px] md:px-[40px] md:py-[30px]
        xl:py-[72px]
        xl:min-h-[567px] xl:px-24 relative
        bg-[url('/section1/hero-bg.png')]
        after:content-[''] after:absolute 
        after:bottom-[-10px] after:left-0 
        after:h-[6px] xl:after:h-[10px] after:w-full
        after:bg-gradient-to-r after:from-[#2ABA64] after:to-[#3369FF]
      "
  >
    <img
      src="/section1/rama.png"
      alt="rama"
      class="absolute right-0 top-[-10px] md:top-[-26px] xl:top-0 w-[210px] md:w-[436px] xl:w-[866px]"
    />

    <div class="flex flex-col gap-3 xl:gap-7 max-w-[750px]">
      <div class="w-[253px] md:w-[333px] xl:w-[506px]">
        <img src={LogotFotosintesis} alt="logo fotosintesis" />
      </div>
      <div class="flex flex-col xl:items-start xl:justify-evenly gap-5 xl:gap-3">
        <div class="text-[26px] xl:text-5xl font-gopher font-bold leading-[30px] xl:leading-[54px]">
          ¡Descubre tu resplandor!
        </div>
        <div
          class="font-semibold text-justify md:w-[454px] xl:w-[795px] 
              text-base md:text-[16px] xl:text-2xl
              leading-[21px] md:leading-[20px] xl:leading-[30px]
            "
        >
          A través de este enfoque innovador y revolucionario que te acompañara
          hacia la revelación de tu luz interior y desbloqueara el potencial
          oculto de tu ser para que disfrutes de una vida con propósito.
        </div>
        <div
          class=" 
              bg-[#2ABA64] text-base text-center font-bold uppercase rounded-md
              xl:mt-3 py-2 px-2 tracking-[.15em] md:w-[334px]
            "
        >
          Invertir en mi crecimiento
        </div>
      </div>
    </div>
  </div>
);

export default Section1;
