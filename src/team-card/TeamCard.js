import React from 'react';
import PropTypes from 'prop-types';
import './TeamCard.css';

function TeamCard (props) {
  const team = props.team;
  const objStyle = {
    'background-image': `url(${team.cover})`
  };
  return (
    <div key={team.id} className='team-container'>
      <div
        id={team.id}
        style={objStyle}
        className='team'
      >
        <div className='info d-flex flex-column justify-content-around align-items-center'>
          <div className='name text-center'>
            {team.name}
          </div>
          <div className='description text-center px-3'>
            {team.desc}
          </div>
          <div className='buttons'>
            <a href={team.facebook}><i className='fa fa-twitter fa-2x ml-1 mr-1' /></a>
            <a href={team.facebook}><i className='fa fa-instagram fa-2x ml-1 mr-1' /></a>
            <a href={team.facebook}><i className='fa fa-facebook-official fa-2x ml-1 mr-1' /></a>
            <a href={team.site}><i className='fa fa-github fa-2x ml-1 mr-1' /></a>
            <a href={team.site}><i className='fa fa-globe fa-2x ml-1 mr-1' /></a>
          </div>
        </div>
        <img src={team.logo} alt='' />
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  team: {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired
  }
};

export default TeamCard;
