import React from 'react';

const Navbar = ({ theme, onOpenPanel }) => {
  return (
    <nav className={theme === 'ios' ? 'navbar-ios' : 'navbar-material'}>
      <div className="navbar-left">
        <button className="icon-bars" onClick={() => onOpenPanel()}></button>
      </div>
      <div className="navbar-center">
        Messages
      </div>
    </nav>
  );
}

export default Navbar;
