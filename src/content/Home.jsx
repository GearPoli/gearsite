import React from "react";
import { TeamGrid } from "../components/team-grid";

const gearLogo = new URL("../../assets/svg/gear_full.svg", import.meta.url);

export const Home = () => (
  <>
    <div id="header" className="row mb-3 pt-3">
      <div className="left col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center align-items-center">
        <img id="gearlogo" src={gearLogo} alt="GearPoli Logo" />
      </div>
      <div className="right col-12 col-md-8 d-flex flex-column justify-content-around align-items-center">
        <div className="description px-3">
          A Gear Poli é a Associação dos Grupos de Extensão Automotivos, Aeroespaciais, de
          Aerodesign, Arquitetura naval e Robótica da Escola Politécnica da Universidade de São
          Paulo. O objetivo principal da entidade é ser uma unidade representativa dos demandas
          comuns aos grupos de extensão associados.
        </div>
      </div>
    </div>

    <TeamGrid />
  </>
);
