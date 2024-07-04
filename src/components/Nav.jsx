import React from 'react';
import { Navbar, NavLeft, Link } from 'framework7-react';

const Nav = ({ title, subtitle, backLink, onOpenPanel }) => {
  return (
    <Navbar title={title} subtitle={subtitle} backLink={backLink}>
      <NavLeft>
        <Link onClick={onOpenPanel}>Left</Link>
      </NavLeft>
    </Navbar>
  );
}

export default Nav;
