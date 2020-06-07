import React from 'react';
import AboutUs from './about-us.jsx';
import OurHistory from './our-history.jsx';
import OurServices from './our-services.jsx';
import Skills from './skills.jsx';
import Faq from './faq.jsx';
import CustomerRegister from './customer-register.jsx';

class Main extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <main>
        <AboutUs data={data.aboutUs} />
        <OurHistory data={data.ourHistory} />
        <OurServices data={data.ourServices} />
        <Skills data={data.skills}/>
        <Faq data={data.faq}/>
        <CustomerRegister data={data.customerRegister}/>
      </main>
    )
  }
}

export default Main;