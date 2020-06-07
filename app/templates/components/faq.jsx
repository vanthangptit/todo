import React from 'react';
import SectionTitle from "./section-title.jsx";

class Skills extends React.Component {
  render() {
    const sectionTitle = this.props.data.sectionTitle;
    const collapse = this.props.data.collapse;
    const tabs = this.props.data.tabs;

    return (
      <div className="faq js-faq">
        <div className="container">
          <SectionTitle title={sectionTitle}/>

          <div className="row">
            <div className="col-sm-12 col-md-6 mb-component">
              <div className="accordion faq__accordion" id="faq-accordion">

                {
                  collapse.map((item, index) => {
                    const show = item.active ? 'show' : '';
                    const collapsed = item.active ? '' : 'collapsed';

                    return (
                      <div className="card faq__card" key={index}>
                        <div className="card-header">
                          <a className={'card-link ' + collapsed} data-toggle="collapse" href={'#collapse-' + index}>
                            {item.button}
                          </a>
                        </div>

                        <div id={'collapse-' + index} className={'collapse ' + show} data-parent="#faq-accordion">
                          <div className="card-body">
                            <h4 className="faq__title">{}</h4>

                            <p className="faq__description" dangerouslySetInnerHTML={{ __html: item.text }} />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className="col-sm-12 col-md-6 mb-component">
              <div className="faq__tabs">
                <ul className="nav nav-tabs faq__nav-tabs" role="tablist">
                  {
                    tabs.buttonTabs.map((item, index) => {
                      const isActive = item.active ? 'active' : '';

                      return (
                        <li className="nav-item" key={index}>
                          <a className={'nav-link ' + isActive} data-toggle="tab" href={'.' + item.idContentTabs}>
                            {item.text}
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>

                <div className="tab-content faq__tab-content">
                  {
                    tabs.contentTabs.map((item, index) => {
                      const isActive = item.active ? ' active' : '';

                      return (
                        <div className={'tab-pane' + isActive + ' ' + item.id} key={index}>
                          <h3 className="faq__tab-title">{item.title}</h3>
                          <p className="faq__description" dangerouslySetInnerHTML={{__html: item.content}}/>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;