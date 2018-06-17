import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar__logo.css';

const Logo = ({
  color,
}) => {
  const classes = {
    accent: {
      path: 'navbar__logo-path_theme-accent',
      svg: 'navbar__logo_theme-accent',
    },
    primary: {
      path: 'navbar__logo-path_theme-primary',
      svg: 'navbar__logo_theme-primary',
    },
  };
  return (
    <NavLink
      className="navbar__logo-link"
      to="/"
    >
      <svg
        className={`navbar__logo ${classes[color].svg}`}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24.6px"
        height="30px"
        viewBox="0 0 50 61.006"
      >
        <g>
          <path
            className={`navbar__logo-path ${classes[color].path}`}
            d="M24.771,42.373C20.948,46.18,10.07,61.006,3.241,61.006C0.811,61.006,0,59.223,0,57.766
            c0-5.834,11.574-13.287,17.94-16.528l14.814-20.092C24.19,22.847,16.32,26.006,7.639,27.14c2.78-4.699,2.896-6.644,4.053-7.94
            c1.158-1.296,5.672-2.43,9.951-3.483c3.936-0.973,13.428-3.808,17.596-3.728c2.775,0.082,5.092,0.892,5.092,2.999
            c0,1.377-1.733,3.727-2.661,4.941L29.63,36.215l0.232,0.162l18.867-7.778l0.693,3.564L24.771,42.373z M36.113,6.237
            C36.113,2.916,41.669,0,46.182,0C48.264,0,50,1.052,50,2.51c0,3.242-4.279,7.211-9.258,7.211
            C37.967,9.721,36.113,8.183,36.113,6.237z"
          />
        </g>
      </svg>
    </NavLink>
  );
};

Logo.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Logo;
