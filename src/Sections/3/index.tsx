const Section3 = () => (
  <div
    id="intro"
    class=" relative 
        m-5 xl:m-0 mt-2 md:m-0 
        py-12 pb-7 md:pt-[89px] md:pb-[35px] xl:py-16 xl:pb-[68px] xl:px-24 
        xl:min-h-[800px] bg-[#092435] 
        rounded-lg xl:rounded-none
      "
  >
    <div>
      <img
        src="/section3/vector-izquierda-section-3.png"
        alt="logo"
        class="
            absolute left-0 top-0
            w-[58px] md:w-[140px] xl:w-[255px] max-w-none
            h-[81px] md:h-[196px] xl:h-[326px] xl:min-h-[210px] 
          "
      />

      <img
        src="/section3/vector-derecha-section-3.png"
        alt="logo"
        class="
            absolute right-0 top-1 xl:top-0
            w-[58px] md:w-[147px] xl:w-[279px] max-w-none
            h-[55px] md:h-[125px] xl:h-[224px] xl:min-h-[164px] 
          "
      />
    </div>
    <div class="flex flex-col items-center gap-6 md:gap-[37px] xl:gap-12 xl:pt-0 text-white ">
      <div
        class="flex flex-col font-gopher font-bold text-white text-center 
            xl:items-center xl:h-[97px] 
            text-xl md:text-[42px] xl:text-[42px] 
            leading-[22px] md:leading-[52px] xl:leading-[45px] 
            bg-clip-text text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
          "
      >
        <div class="bg-clip-text text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF]">
          Emprendedor Digital,
        </div>
        <div class="bg-clip-text text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF]">
          Especialista en Crecimiento Personal,
        </div>
        <div class="bg-clip-text text-transparent  bg-gradient-to-r from-[#2ABA64] to-[#3369FF]">
          Proyector de Vida y Formador.
        </div>
      </div>

      <div
        class="
            flex flex-col items-center md:items-start
            gap-10 md:gap-5 xl:gap-12 md:px-[42px] 
            md:grid md:grid-cols-2
            xl:flex xl:flex-col
            xl:pl-[22px] xl:pt-12
          "
      >
        <div
          class="
              flex flex-col items-center xl:flex-row 
              gap-2 xl:gap-10 box-content px-5 md:px-0 text-base font-normal leading-[21px] 
            "
        >
          <div
            class="
                flex justify-center items-center box-content xl:mt-1 rounded-lg
                w-[206px] md:w-full 
                h-[97px] md:h-[156px]
                xl:min-w-[400px] xl:min-h-[188px] bg-[#FFFAEB] 
              "
          >
            <img
              src="/section3/logo-section-3.png"
              alt="logo"
              class="max-w-none w-[150px] xl:w-[290px] xl:min-h-[100px] h-[51px] xl:h-[100px] "
            />
          </div>
          <div class="md:mt-[18px] md:text-[18px] md:leading-[25px] xl:mt-0 xl:text-lg xl:leading-[25px]">
            "Quiero a través de mis redes sociales talleres, conferencias,
            sesiones personalizadas, sembrar la consciencia en el mundo, guiado
            por el amor, la ética y la coherencia. Aspiro a tocar las vidas de
            las personas y acompañarlas en sus procesos vitales, reconociendo
            nuestra existencia en este mundo como una experiencia humana llena
            de desafíos y oportunidades que podemos explorar juntos. En este
            viaje, mi propósito es analizar cada aspecto de la vida desde la
            amplitud de nuestra existencia, reconociendo la integridad de
            cuerpo, alma y mente que nos define como seres perfectos en
            evolución."
          </div>
        </div>

        <div
          class="
              flex flex-col xl:flex-row items-center box-content
              gap-3 xl:gap-7 
              px-5 md:px-0 lg:px-[18px] xl:p-0 pr-2 
              text-base font-normal leading-[21px]
            "
        >
          <div
            class="
                flex justify-center items-center mr-3 xl:mt-2
                w-[223px] md:w-full xl:w-[200px]
                h-[122px]  md:h-[156px]
                xl:min-w-[399px] xl:min-h-[218px] bg-[#FFFAEB] rounded-lg
              "
          >
            <img
              src="/section3/logo-fotosintesis-section-3.png"
              alt="logo"
              class="max-w-none w-[176px] xl:w-[316px] xl:min-h-[100px] h-[56px] xl:h-[100px] "
            />
          </div>
          <div class="md:mt-[18px] md:text-[18px] md:leading-[25px] xl:mt-0 xl:text-lg xl:leading-[25px]">
            <ul class="flex flex-col gap-[10px] xl:mt-2">
              <li>
                • Al igual que la fotosíntesis, el crecimiento personal es un
                proceso que requiere tiempo, dedicación у paciencia.{" "}
              </li>
              <li>
                • Al igual que las plantas necesitan luz para realizar la
                fotosíntesis, las personas necesitan aprender y experimentar
                cosas nuevas para crecer.
              </li>
              <li>
                • Al igual que las plantas necesitan nutrientes para crecer, las
                personas necesitan rodearse de personas positivas y tener una
                actitud positiva para crecer.
              </li>
              <li>
                • Al igual que las plantas necesitan agua para sobrevivir, las
                personas necesitan cuidar su cuerpo y su mente para sobrevivir.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        class="
            inline-block uppercase h-10 text-center 
            mx-4 xl:m-0 xl:w-auto px-4 font-bold
            tracking-[.15em] xl:tracking-[.35em] xl:text-base 
            border-2 rounded-md border-[#2ABA64] 
          "
      >
        Ver planes ahora
      </button>
    </div>
  </div>
);

export default Section3;
