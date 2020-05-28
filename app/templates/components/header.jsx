import React from 'react';
import Inform from "./inform.jsx";
import Nav from "./nav.jsx";

class Header extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <header className="header">
        <div className="container">
          <Inform personal={data.personal} language={data.language} social={data.social}/>
        </div>

        <Nav logo={data.logo} menu={data.menu}/>
      </header>
    )
  }
}

export default Header;