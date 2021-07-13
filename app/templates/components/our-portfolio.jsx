import React from "react";
import SectionTitle from "./section-title.jsx";

class OurPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ activeIndex: index });
  };

  render() {
    const sectionTitle = this.props.data.sectionTitle;
    const buttonList = this.props.data.buttonList;
    const cards = this.props.data.cards;

    return (
      <section className="our-project">
        <div className="container">
          <SectionTitle title={sectionTitle}/>

          <div className="our-project__contain">
            <div className="our-project__buttons">
              {
                buttonList.map((item, indexItem) => {
                  const active = indexItem === this.state.activeIndex ? 'active' : '';
                  const href = item.href === '*' ? '*' : `.${item.href}`;

                  return (
                    <a href={href} className={'our-project__btn-link js-our-project-button-link ' + active} key={indexItem}
                       onClick={this.handleClick.bind(this, indexItem)}>
                      {item.text}
                    </a>
                  )
                })
              }
            </div>

            <div className="our-project__cards js-our-project-cards">
              <div className="row">
                {
                  cards.map((item, indexItem) =>
                    <div className={'col-sm-6 col-md-4 mb-4 js-our-project-card ' + item.classFilter } key={indexItem}>
                      <article className="our-project__card">
                        <div className="our-project__image" style={{ backgroundImage: `url(${item.backgroundImage})`}} />

                        <div className="our-project__textbox">
                          <h4 className="our-project__title">{item.title}</h4>
                          <p className="our-project__subtitle">{item.subtitle}</p>
                        </div>
                      </article>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurPortfolio;