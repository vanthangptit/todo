import React from 'react';
const masthead = require('../contents/masthead.json');
const header = require('../contents/header.json');
const main = require('../contents/main.json');

import Header from "../templates/components/header.jsx";
import Masthead from "../templates/components/masthead.jsx";
import Main from "../templates/components/main.jsx";
import Footer from "../templates/components/footer.jsx";

class Landing extends React.Component {
  render() {
    return (
      <div className="page-main">
        <Header data={header}/>
        <Masthead data={masthead}/>
        <Main data={main}/>
        <Footer />
      </div>
    )
  }
}

export default Landing;