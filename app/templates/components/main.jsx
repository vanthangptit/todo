import React from 'react';
import AboutUs from './about-us.jsx';
import OurHistory from './our-history.jsx';
import OurServices from './our-services.jsx';
import Skills from './skills.jsx';
import Faq from './faq.jsx';
import CustomerRegister from './customer-register.jsx';
import OurSpecialTeam from './our-special-team.jsx';
import WorkingUs from './working-us.jsx';
import OurPortfolio from './our-portfolio.jsx';
import TestimonialsArea from './testimonials-area.jsx';

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
        <OurSpecialTeam data ={data.ourSpecialTeam}/>
        <WorkingUs data ={data.workingUs}/>
        <OurPortfolio data ={data.ourPortfolio}/>
        <TestimonialsArea data ={data.testimonialsArea}/>
      </main>
    )
  }
}

export default Main;