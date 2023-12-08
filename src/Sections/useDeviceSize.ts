"use client";
import { createEffect, createSignal } from "solid-js";

const useDeviceSize = () => {
  const [width, setWidth] = createSignal(0);
  const [height, setHeight] = createSignal(0);

  // const handleWindowResize = () => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // };

  // createEffect(() => {
  //   handleWindowResize();
  //   window.addEventListener("resize", handleWindowResize);
  //   return () => window.removeEventListener("resize", handleWindowResize);
  // });

  return { width, height };
};

export default useDeviceSize;
