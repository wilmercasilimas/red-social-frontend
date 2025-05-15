import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const PublicLayout = () => {
  return (
    <>
      {/*LAYOUT}*/}
      <Header />

      {/*Contenido Principal*/}

      <section className="layout__content">
        <Outlet />
      </section>
    </>
  );
};
