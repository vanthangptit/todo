import React from 'react';

class Inform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLanguageDropdown: false,
    };

    this.handleClickLanguageDropdown = this.handleClickLanguageDropdown.bind(this);
  }

  handleClickLanguageDropdown(e) {
    e.preventDefault();

    this.setState(state => ({
      isLanguageDropdown: !state.isLanguageDropdown
    }));
  }

  render() {
    const isShowNavBar = this.state.isLanguageDropdown ? ' show' : '';

    return (
      <div className="inform">
        <div className="inform__left">
          {
            this.props.personal.map((item, index) =>
              <span key={index}>{item}</span>
            )
          }
        </div>

        <div className="inform__right">
          <ul className={"inform__language" + isShowNavBar}>
            <a href={this.props.language.active.href} onClick={this.handleClickLanguageDropdown}>
              {this.props.language.active.text}
            </a>

            <ul>
              {
                this.props.language.dropdown.map((item, index) =>
                  <a className="text-primary" href={item.href} aria-disabled={item.disabled} key={index}>
                    {item.text}
                  </a>
                )
              }
            </ul>
          </ul>

          <ul className="inform__social">
            {
              this.props.social.map((item, index) =>
                <a href={item.href} className={"fa " + item.icon} title={item.title} key={index}/>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Inform;