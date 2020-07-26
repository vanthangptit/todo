import React, { Component } from "react";
import SectionTitle from './section-title.jsx';

class Blogs extends Component {
  render() {
    const sectionTitle = this.props.data.sectionTitle;
    const news = this.props.data.news;

    return (
      <section className="blogs mb-component">
        <div className="container">
          <SectionTitle title={sectionTitle}/>

          <article className="blogs__latest-news row">
            {
              news.map((item, index) =>
                <div className="col-lg-4 col-md-6 blogs__columns" key={index}>
                  <a href={item.link.href} className="blogs__topline">
                    <img src={item.image.src} alt={item.image.alt} />
                  </a>

                  <div className="blogs__botline">
                    <div className="blogs__content">
                      <div className="blogs__info">
                        <span className="blogs__comment">
                          <i className={"fa " + item.comment.icon}></i>{item.comment.text}
                        </span>
                        <span className="blogs__created-date">
                          <i className={"fa " + item.createdDate.icon}></i>{item.createdDate.text}
                        </span>
                      </div>

                      <h4 className="blogs__title"><a href={item.link.href}>{item.title}</a></h4>

                      <p className="blogs__description" dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>

                    <div className="blogs__button">
                      <a href={item.link.href}>{item.link.text}</a>
                    </div>
                  </div>
                </div>
              )
            }
          </article>
        </div>
      </section>
    );
  }
}

export default Blogs