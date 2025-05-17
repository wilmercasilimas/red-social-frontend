import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const PrivateLayout = () => {
  return (
    <>
      {/*LAYOUT}*/}

      {/*Cabecera y Navegación*/}
      <Header />

      {/*Contenido Principal*/}
      <section className="layout__content">
        <Outlet />
      </section>

      {/*Barra Lateral*/}
        <Sidebar />

    </>
  );
};
