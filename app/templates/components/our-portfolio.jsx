import React from "react";
import SectionTitle from "./section-title.jsx";

class OurPortfolio extends React.Component {
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
                  const active = item.active ? 'active' : '';

                  return (
                    <a href={item.href} className={'our-project__btn-link ' + active} key={indexItem}>
                      {item.text}
                    </a>
                  )
                })
              }
            </div>

            <div className="our-project__cards">
              <div className="row">
                {
                  cards.map((item, indexItem) =>
                    <article className={'col-sm-6 col-md-4 mb-component ' + item.classFilter } key={indexItem}>
                      <div className="our-project__image" style={{ backgroundImage: `url(${item.backgroundImage})`}} />

                      <div className="our-project__textbox">
                        <h4 className="our-project__title">{item.title}</h4>
                        <p className="our-project__subtitle">{item.subtitle}</p>
                      </div>
                    </article>
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