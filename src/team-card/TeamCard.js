import React from "react";
import PropTypes from "prop-types";
import "./TeamCard.css";

function TeamCard(props) {
  const team = props.team;
  const objStyle = {
    "background-image": `url(${team.cover})`,
  };
  return (
    <div key={team.id} className="team-container">
      <div id={team.id} style={objStyle} className="team">
        <div className="info d-flex flex-column justify-content-around align-items-center">
          <div className="name text-center">{team.name}</div>
          <div className="description text-center px-3">{team.desc}</div>
          <div className="buttons">
            {build_button(team.instagram, "fa fa-instagram fa-2x ml-1 mr-1")}
            {build_button(team.facebook,"fa fa-facebook-official fa-2x ml-1 mr-1")}
            {build_button(team.github, "fa fa-github fa-2x ml-1 mr-1")}
            {build_button(team.site, "fa fa-globe fa-2x ml-1 mr-1")}
            {build_button(team.youtube, "fa fa-youtube fa-2x ml-1 mr-1")}
          </div>
        </div>
        <img src={team.logo} alt="" />
      </div>
    </div>
  );
}

const build_button = (link, className) => {
  return link !== "" ? (
    <a href={link}>
      <i className={className} />
    </a>
  ) : (
    <a>
      <i className={className} />
    </a>
  );
};

TeamCard.propTypes = {
  team: {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
  },
};

export default TeamCard;
