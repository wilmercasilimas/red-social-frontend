import React from "react";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="layout__navbar">
      <div className="navbar__header">
        <a href="#" className="navbar__title">RedSocialW</a>
      </div>

        <Nav />

    </header>
  );
};
