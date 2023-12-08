"use client";
import { createEffect } from "solid-js";

export default function RedirectHome() {
  createEffect(() => {
    window.location.replace("/");
  });

  return <div />;
}
