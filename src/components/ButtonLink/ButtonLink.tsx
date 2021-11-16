import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface ButtonLinkProps {
  href: string;
  className: string;
  text: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ href, className, text }) => {
  return (
    <NavLink to={href} className={`btn ${className}`}>
      {text}
    </NavLink>
  );
};

export default ButtonLink;
