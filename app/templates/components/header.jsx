import React from 'react';
import Inform from "./inform.jsx";
import Nav from "./nav.jsx";

const inform = {
  personal: [
    "Đắc Sở - Hoài Đức - Hà Nội",
    "0383.249.189",
    "nguyenthang.FE@gmail.com"
  ],
  language: {
    activeText: "Vietnamese",
    dropdown: [
      {
        href: "#",
        disabled: false,
        text: "Vietnamese"
      },
      {
        href: "#",
        disabled: true,
        text: "English"
      },
      {
        href: "#",
        disabled: true,
        text: "Japan"
      }
    ]
  },
  social: [
    {
      href: "#",
      icon: "fa-twitter-square",
      title: "Twitter"
    },
    {
      href: "#",
      icon: "fa-facebook",
      title: "Facebook"
    },
    {
      href: "#",
      icon: "fa-google-plus",
      title: "Google Plus"
    },
    {
      href: "#",
      icon: "fa-youtube-square",
      title: "Youtube"
    }
  ]
};

const logo = {
  text: "TNV",
  href: "#",
  alt: "Home Page"
};

const menu = [
  {
    index: 1,
    text: "Home",
    title: "Home page",
    link: "#",
    alt: "Home page",
    target: "_self"
  },
  {
    index: 2,
    text: "About",
    title: "About page",
    link: "#",
    alt: "About page",
    target: "_self"
  },
  {
    index: 3,
    text: "Services",
    title: "Services page",
    link: "#",
    alt: "Services page",
    target: "_self"
  },
  {
    index: 4,
    text: "Portfolio",
    title: "Portfolio page",
    link: "#",
    alt: "Portfolio page",
    target: "_self"
  },
  {
    index: "5",
    text: "Dropdown",
    title: "Dropdown page",
    link: "#",
    alt: "Dropdown page",
    target: "_self",
    subItems: [
      {
        indexItem: "1",
        text: "Dropdown 1.0",
        link: "#",
        alt: "Item page",
        target: "_self",
      },
      {
        indexItem: "2",
        text: "Dropdown 1.1",
        link: "#",
        alt: "Item page",
        target: "_self",
      },
    ]
  },
  {
    index: "6",
    text: "Blog",
    title: "Blog page",
    link: "#",
    alt: "Blog page",
    target: "_self"
  },
  {
    index: "7",
    text: "Contact",
    title: "Contact page",
    link: "#",
    alt: "Contact page",
    target: "_self"
  }
];

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Inform personal={inform.personal} language={inform.language} social={inform.social}/>
        </div>

        <Nav logo={logo} menu={menu}/>
      </header>
    )
  }
}

export default Header;