import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Service from "../../components/Service";
import Horario from "../../components/Horario";
import Comentario from "../../components/Comentario";

const LandigPage = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Service></Service>
      <Horario></Horario>
      <Comentario></Comentario>
      <Footer></Footer>
    </div>
  );
};

export default LandigPage;
