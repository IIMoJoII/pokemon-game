import React from 'react';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";

import BgImg from './img/bgimg.jpg'
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Header title={"Header title"} descr={"Header description"}/>
      <Layout title={"Layout title"} descr={"Layout description"} urlBg={BgImg} />
      <Layout title={"Layout title"} descr={"Layout description"} colorBg={"#e2e2e2"} />
      <Layout title={"Layout title"} descr={"Layout description"} urlBg={BgImg} />
      <Footer />
    </div>
  );
}

export default App;
