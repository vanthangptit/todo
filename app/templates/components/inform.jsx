import React from 'react';

class Inform extends React.Component {
  render() {
    return (
      <div className="inform">
        <div className="inform__left">
          <span className="inform__address">Đắc Sở - Hoài Đức - Hà Nội</span>
          <span className="inform__phone">0383.249.189</span>
          <span className="inform__email">nguyenthang.FE@gmail.com</span>
        </div>

        <div className="inform__right">
          <ul className="inform__language">
            <a href="#">Vietnamese</a>

            <ul>
              <a href="#" aria-disabled="false">Vietnamese</a>
              <a href="#" aria-disabled="true">English</a>
              <a href="#" aria-disabled="true">Japan</a>
            </ul>
          </ul>

          <ul className="inform__social">
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

export default Inform;