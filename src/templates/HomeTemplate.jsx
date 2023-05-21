import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
