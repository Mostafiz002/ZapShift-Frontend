import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/shared/Footer";
import NavBar from "../pages/shared/NavBar";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen max-w-[1332px] px-4 mx-auto">
      <header>
        <NavBar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
