import React from 'react';

class HeaderTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowNavBar: false,
      isShowSubItem: false,
    };

    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.handleClickSubItem = this.handleClickSubItem.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleShowMenu() {
    if (!this.state.isShowNavBar) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      isShowNavBar: !prevState.isShowNavBar,
    }));
  }

  handleClickSubItem(e) {
    e.preventDefault();

    this.setState(state => ({
      isShowSubItem: !state.isShowSubItem
    }));
  }

  handleOutsideClick(e) {
    if (this.pop.contains(e.target)) {
      return;
    }

    this.handleShowMenu(e);
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

            <div className={"hamburger-icon" + isShowNavBar} onClick={this.handleShowMenu}>
              <span></span>
            </div>

            <ul className={"navbar-nav" + isShowNavBar} ref={node => {this.pop = node}}>
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
              <div className="navbar-main__backdrop"/>
            }
          </nav>
        </div>
      </div>
    )
  }
}

export default HeaderTop;
