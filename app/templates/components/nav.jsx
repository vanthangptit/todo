import React from 'react';

class HeaderTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowNavBar: false,
      isShowSubItem: false,
    };

    this.handleClickNavBar = this.handleClickNavBar.bind(this);
    this.handleClickSubItem = this.handleClickSubItem.bind(this);
  }

  handleClickNavBar() {
    this.setState(state => ({
      isShowNavBar: !state.isShowNavBar
    }));
  }

  handleClickSubItem(e) {
    e.preventDefault();

    this.setState(state => ({
      isShowSubItem: !state.isShowSubItem
    }));
  }

  render() {
    const isShowNavBar = this.state.isShowNavBar ? ' show' : '';
    const isShowSubItem = this.state.isShowSubItem ? ' open' : '';

    return (
      <div className="nav-contain bg-secondary">
        <div className="container">
          <nav className="navbar-main">
            <a className="nav-logo" href={this.props.logo.href} alt={this.props.logo.alt}>
              {this.props.logo.text}
            </a>

            <div className={"hamburger-icon" + isShowNavBar} onClick={this.handleClickNavBar}>
              <span></span>
            </div>

            <ul className={"navbar-nav" + isShowNavBar}>
              {this.props.menu.map((items, index) => {
                if (!items.subItems) {
                  return (
                    <li className="navbar-nav__item" key={index}>
                      <a className="navbar-nav__link" href={items.link} alt={items.alt} target={items.target} title={items.title}>
                        {items.text}
                      </a>
                    </li>
                  );
                }
                else {
                  return (
                    <li className={"navbar-nav__item item-dropdown" + isShowSubItem } key={index}>
                      <a className="navbar-nav__link" href={items.link} alt={items.alt} target={items.target} title={items.title} onClick={this.handleClickSubItem}>
                        {items.text}
                      </a>

                      <ul>
                        {items.subItems.map((item, indexItem) => {
                          return (
                            <li className="navbar-nav__item" key={indexItem}>
                              <a className="navbar-nav__link" href={item.link} alt={item.alt} target={item.target}>
                                {item.text}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  );
                }
              })}
            </ul>

            {this.state.isShowNavBar === true &&
              <div className="navbar-main__backdrop" onClick={this.handleClickNavBar}/>
            }
          </nav>
        </div>
      </div>
    )
  }
}

export default HeaderTop;