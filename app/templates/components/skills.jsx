import React from 'react';
import Progressbar from './circular-progressbar.jsx';

class Skills extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <section className="skills js-skills-container mb-component" style={{ backgroundImage: `url(${data.backgroundImage})`}}>
        <div className="container">
          <div className="skills__row">
            {data.skillList.map((item, index) => {
              return (
                <div className="skills__columns" key={index}>
                  <Progressbar data={item.percentage}/>

                  <div className="skills__description" dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Skills;