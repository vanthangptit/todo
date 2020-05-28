import React from 'react';
import AboutUs from './about-us.jsx';

class Main extends React.Component {
  render() {
    return (
      <main>
        <AboutUs data={this.props.data.aboutUs} />

      </main>
    )
  }
}

export default Main;