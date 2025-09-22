import React from "react";
import Header from "../pages/homepage/header/Header";
import Footer from "../pages/homepage/footer/Footer";
import { Outlet } from "react-router";
import { NavigationDock } from "../components/Navigation/NavigationnDock";

const Layout = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Header />
      <main className='grow'>
        <Outlet />
        <NavigationDock />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
