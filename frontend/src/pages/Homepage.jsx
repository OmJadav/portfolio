import React from "react";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
    </>
  );
};
