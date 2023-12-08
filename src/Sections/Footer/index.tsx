export default () => (
  <div>
    <div class="h-[6px] xl:h-[11px] w-full bg-gradient-to-r from-[#2ABA64] to-[#3369FF]" />
    <div class="bg-[#092435]">
      <div
        class=" text-white w-fit m-auto
          flex flex-col md:flex-row md:gap-[40px] lg:gap-0
          xl:h-[339px] md:px-0 2xl:px-[100px]
          pb-[27px] xl:pb-0
        "
      >
        <div
          class="
            flex justify-center items-center self-center
            mt-[35px] xl:mt-0
            w-[250px] h-[152px]
            xl:w-[487px] xl:h-[152px]
          "
        >
          <a href="/">
            <img src="/footer/logo-footer.png" alt="logo footer" />
          </a>
        </div>

        <div class="flex">
          <div
            class="
              flex flex-col 
              gap-3 xl:gap-5 
              mt-[21px] xl:mt-[58px] 
              ml-[19px] xl:ml-[141px]
            "
          >
            <div
              class="
                uppercase font-bold 
                text-[13px] xl:text-[22px]
              "
            >
              Secciones
            </div>
            <ul
              class="
                flex flex-col 
                gap-[9px] xl:gap-[16px]
                text-[12px] xl:text-[21px]
              "
            >
              <li>
                <a
                  href="#inicio"
                  class="
                      flex 
                      gap-[8px] xl:gap-[21px]
                    "
                >
                  <img
                    src="/footer/arrow-footer.svg"
                    alt="arrow footer"
                    class="scale-50 xl:scale-100"
                  />
                  Intro
                </a>
              </li>
              <li>
                <a
                  href="#metodo"
                  class="
                      flex 
                      gap-[8px] xl:gap-[21px]
                    "
                >
                  <img
                    src="/footer/arrow-footer.svg"
                    alt="arrow footer"
                    class="scale-50 xl:scale-100"
                  />
                  Método
                </a>
              </li>
              <li>
                <a
                  href="#planes"
                  class="
                      flex 
                      gap-[8px] xl:gap-[21px]
                    "
                >
                  <img
                    src="/footer/arrow-footer.svg"
                    alt="arrow footer"
                    class="scale-50 xl:scale-100"
                  />
                  Planes
                </a>
              </li>
              <li>
                <a
                  href="#interactuemos"
                  class="
                      flex 
                      gap-[8px] xl:gap-[21px]
                    "
                >
                  <img
                    src="/footer/arrow-footer.svg"
                    alt="arrow footer"
                    class="scale-50 xl:scale-100"
                  />
                  Interactuemos
                </a>
              </li>
            </ul>
          </div>

          <div
            class="
                flex flex-col 
                ml-[60px] xl:ml-[155px] 
                mt-[21px] xl:mt-[106px] 
                gap-[16px]
              "
          >
            <div class="uppercase font-bold text-[13px] xl:text-[22px]">
              Contacto
            </div>
            <ul
              class="
                  flex flex-col 
                  gap-[15px]
                  text-[12px] xl:text-[21px]
                "
            >
              <li>
                <a href="tel:+34657241310" class="flex gap-[8px] xl:gap-[13px]">
                  <img src="/footer/phone.svg" alt="phone" />
                  +34657241310
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fotosintesishuman.com"
                  class="flex gap-[8px] xl:gap-[13px]"
                >
                  <img src="/footer/mail.svg" alt="mail" />
                  info@fotosintesishuman.com
                </a>
              </li>
              <li class="flex gap-6 xl:mt-2">
                <a
                  href="https://www.linkedin.com/in/jonathan-perez-medina-17614a231/"
                  target="_blank"
                >
                  <img src="/header/linkedin.png" alt="Linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/jonaperezme/"
                  target="_blank"
                >
                  <img src="/header/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/JonaPerezM" target="_blank">
                  <img src="/header/facebook.png" alt="facebook" />
                </a>
                <a
                  href="https://www.tiktok.com/@jonaperezme?lang=es"
                  target="_blank"
                >
                  <img src="/header/tiktok.png" alt="Tiktok" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
          flex justify-center items-center 
          font-semibold 
          text-[15px] xl:text-[19px] 
          h-[48px] xl:h-[80px] 
          bg-gradient-to-r from-[#2ABA64] to-[#3369FF]
        "
    >
      ©2023 Jonathan Perez. All rights reserved
    </div>
  </div>
);
