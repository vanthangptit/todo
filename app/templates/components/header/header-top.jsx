import React from 'react';

class HeaderTop extends React.Component {
  render() {
    return (
      <div className="header-top">
        <div className="header-top__left">
          <span className="header-top__address">Đắc Sở - Hoài Đức - Hà Nội</span>
          <span className="header-top__phone">0383.249.189</span>
          <span className="header-top__email">nguyenthang.FE@gmail.com</span>
        </div>

        <div className="header-top__right">
          <ul className="header-top__language">
            <a href="#">Vietnamese</a>

            <ul>
              <a href="#" aria-disabled="false">Vietnamese</a>
              <a href="#" aria-disabled="true">English</a>
              <a href="#" aria-disabled="true">Japan</a>
            </ul>
          </ul>

          <ul className="header-top__social">
            <a href="#" className="fa fa-twitter-square"/>
            <a href="#" className="fa fa-facebook"/>
            <a href="#" className="fa fa-google-plus"/>
            <a href="#" className="fa fa-youtube-square"/>
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderTop;