import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h3>HEADER</h3>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h3>FOOTER</h3>
      </footer>
    </div>
  );
};

export default Layout;
