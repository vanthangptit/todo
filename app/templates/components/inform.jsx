import React from 'react';

class Inform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLanguageDropdown: false,
    };

    this.handleClickLanguageDropdown = this.handleClickLanguageDropdown.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClickLanguageDropdown() {
    if (!this.state.isLanguageDropdown) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      console.log(this.state.isLanguageDropdown);
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      isShowNavBar: !prevState.isShowNavBar,
    }));
  }

  handleOutsideClick(e) {
    if (this.pop.contains(e.target)) {
      return;
    }

    this.handleClickLanguageDropdown(e);
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
          <ul className={"inform__language" + isShowNavBar} ref={node => {this.pop = node}}>
            <span onClick={this.handleClickLanguageDropdown}>
              {this.props.language.activeText}
            </span>

            <ul>
              {this.state.isLanguageDropdown && (
                this.props.language.dropdown.map((item, index) =>
                  <a className="text-primary" href={item.href} aria-disabled={item.disabled} key={index}>
                    {item.text}
                  </a>
                )
              )}
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
