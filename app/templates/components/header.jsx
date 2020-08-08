import React from 'react';
import Inform from "./inform.jsx";
import Nav from "./nav.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolling: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY >= 100 && this.state.isScrolling !== true) {
      this.setState({isScrolling: true});
    }
    else if (window.scrollY <= 100 && this.state.isScrolling === true) {
      this.setState({isScrolling: false});
    }
  }

  render() {
    const data = this.props.data;
    const isFixed = this.state.isScrolling ? ' is-fixed' : '';

    return (
      <header className={"header" + isFixed}>
        <div className="container">
          <Inform personal={data.personal} language={data.language} social={data.social}/>
        </div>

        <Nav logo={data.logo} menu={data.menu}/>
      </header>
    )
  }
}

export default Header;