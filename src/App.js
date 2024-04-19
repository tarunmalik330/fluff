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

function App() {
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
    </ >
  );
}

export default App;
