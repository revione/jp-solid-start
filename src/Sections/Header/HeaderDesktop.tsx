const HeaderDesktop = () => {
  return (
    <div
      class="flex items-center justify-between font-semibold
        h-[120px] xl:px-24 px-[20px] bg-[#092435]
      "
    >
      <div class="flex items-center gap-[30px]">
        <div class="w-[178px]h-[111px]">
          <a href="/">
            <img src="/header/logo.png" alt="logo" />
          </a>
        </div>
        <div class="flex gap-[21px] h-[20px]">
          <a
            href="https://www.linkedin.com/in/jonathan-perez-medina-17614a231/"
            target="_blank"
          >
            <img src="/header/linkedin.png" alt="Linkedin" />
          </a>
          <a href="https://www.instagram.com/jonaperezme/" target="_blank">
            <img src="/header/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/JonaPerezM" target="_blank">
            <img src="/header/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.tiktok.com/@jonaperezme?lang=es" target="_blank">
            <img src="/header/tiktok.png" alt="Tiktok" />
          </a>
        </div>
      </div>

      <div class="flex text-white gap-7 items-center text-xl">
        <a href="#intro">Intro</a>
        <a href="#metodo">Método</a>
        <a href="#planes">Planes</a>
        <a href="#interactuemos">Interactuemos</a>

        <div>
          <a
            href="/"
            class="flex items-center uppercase px-4 h-10 border-2 rounded-md border-[#346AFF]"
          >
            Blog
          </a>
        </div>
        <a
          href="#asesoria"
          class="flex items-center uppercase px-6 h-10 border-2 rounded-md border-[#2ABA64]"
        >
          Asesoria - Free
        </a>
      </div>
    </div>
  );
};

export default HeaderDesktop;
