import React from 'react';
import HeaderTop from "./header-top.jsx";
import HeaderBottom from "./header-bottom.jsx";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <HeaderTop />
        <HeaderBottom />
      </header>
    )
  }
}

export default Header;