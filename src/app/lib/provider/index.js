"use client";

import ButtonProvider from "@/context/ButtonContext";

function Provider({ children }) {
  return <ButtonProvider>{children}</ButtonProvider>;
}

export default Provider;
