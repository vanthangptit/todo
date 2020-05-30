import React from 'react';
import AboutUs from './about-us.jsx';
import OurHistory from './our-history.jsx';

class Main extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <main>
        <AboutUs data={data.aboutUs} />
        <OurHistory data={data.ourHistory} />
      </main>
    )
  }
}

export default Main;