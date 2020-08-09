import React from 'react';

class Footer extends React.Component {
  render() {
    const left = this.props.data.footerTop.left;
    const middle = this.props.data.footerTop.middle;
    const right = this.props.data.footerTop.right;
    const footerBottom = this.props.data.footerBottom;

    return (
      <footer className="footer">
        <section className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-xs-6">
                <h2 className="footer-top__logo-title">{ left.title }</h2>
                <p className="footer-top__text" dangerouslySetInnerHTML={{ __html: left.description }} />

                <div className="footer-top__social">
                  {
                    left.social.map((item, index) =>
                      <a href={item.link} key={ index } className="footer-top__social-link">
                        <span className={ "fa " + item.icon } />
                      </a>
                    )
                  }
                </div>
              </div>

              <div className="col-md-4 col-xs-6">
                <h4 className="footer-top__title">{ middle.title }</h4>
                <p className="footer-top__text" dangerouslySetInnerHTML={{ __html: middle.description }} />
                <div className="footer-top__info">
                  {
                    middle.info.map((item, index) =>
                      <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    )
                  }
                </div>
              </div>

              <div className="col-md-4 col-xs-6">
                <h4 className="footer-top__title">{ right.title }</h4>

                <div className="footer-top__instagram">


                    {
                      right.instagram.map((item, index) =>
                        <div className="footer-top__instagram-columns" key={ index }>
                          <a href={ item.link } className="footer-top__instagram-link">
                            <img src={ item.image } alt={ item.alt } />
                          </a>
                        </div>
                      )
                    }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-bottom">
          <p className="footer-bottom__no-copy-right" dangerouslySetInnerHTML={{ __html: footerBottom }} />
        </section>
      </footer>
    )
  }
}

export default Footer;