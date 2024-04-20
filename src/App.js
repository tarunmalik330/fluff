import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import WhatWeDo from './components/WhatWeDo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service from './components/Service';
import NeedUs from './components/NeedUs';
import Trusted from './components/Trusted';
import GetConnect from './components/GetConnect';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import backtotop from "./assets/images/webp/backtotop.webp"

function App() {
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <WhatWeDo />
        <Service />
        <NeedUs />
        <Trusted />
        <GetConnect />
        <Footer />
      </div>
      <div onClick={() => top()} className={backToTop ? "back_to_top bg_green cursor_pointer d-flex justify-content-center align-items-center" : "d-none"}>
        <img src={backtotop} alt='backtotop' className='w-50 h-50' />
      </div>
    </ >
  );
}

export default App;
