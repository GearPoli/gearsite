// import React from 'react'
import TeamCard from '../team-card/TeamCard';
import teams from './teams';
import './TeamGrid.css';

function App () {
  return teams.map((team) => TeamCard({ team }));
}

export default App;
