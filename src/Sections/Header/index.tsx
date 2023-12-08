"use client";

import { createEffect, createSignal } from "solid-js";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default () => {
  const [isSmall, setIsSmall] = createSignal(false);

  createEffect(() => {
    setIsSmall(+window.innerWidth <= 1024);
  });

  return <>{isSmall() ? <HeaderMobile /> : <HeaderDesktop />}</>;
};
