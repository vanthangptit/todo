import React from 'react';
import Header from "../templates/components/header.jsx";
import Main from "../templates/components/main.jsx";
import Footer from "../templates/components/footer.jsx";

class Landing extends React.Component {
  render() {
    return (
      <div className="page-main">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Landing;