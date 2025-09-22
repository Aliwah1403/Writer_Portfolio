import React from "react";
import Header from "../pages/homepage/header/Header";
import Footer from "../pages/homepage/footer/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
