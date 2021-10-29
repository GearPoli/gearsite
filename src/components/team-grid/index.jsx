import React from "react";
import { TeamCard } from "../team-card";
import teams from "../../data/teams";
import "./TeamGrid.css";

export const TeamGrid = () => (
  <div id="teams-grid" className="row">
    {teams.map((team) => TeamCard({ team }))}
  </div>
);
