import React, { Component } from "react";
import shortid from "shortid";

export const AppContext = React.createContext();

export class AppProvider extends Component {
  handleIsBrandDark = isBrandDark => {
    this.setState({ isBrandDark });
  };

  handleIsNavbarDark = isNavbarDark => {
    this.setState({ isNavbarDark });
  };

  handleIsSiteHeaderShown = isSiteHeaderShown => {
    this.setState({ isSiteHeaderShown });
  };

  state = {
    isSiteHeaderShown: true,
    isBrandDark: true,
    isNavbarDark: true,
    handleIsBrandDark: this.handleIsBrandDark,
    handleIsNavbarDark: this.handleIsNavbarDark,
    handleIsSiteHeaderShown: this.handleIsSiteHeaderShown,
    navigationItems: [
      {
        id: shortid.generate(),
        label: "Home",
        desc: "Return to the homepage",
        link: "/",
        hidden: true
      },
      {
        id: shortid.generate(),
        label: "Our Story",
        desc: "Know our story!",
        link: "/our-story"
      },
      {
        id: shortid.generate(),
        label: "The Celebration",
        desc: "Get ceremony info here!",
        dropdownItems: [
          {
            id: shortid.generate(),
            label: "When & Where",
            desc: "Find out when and where!",
            link: "/when-where"
          },
          {
            id: shortid.generate(),
            label: "Bridesmaids & Groomsmen",
            desc: "Browse the VIPs!",
            link: "/bridesmaids-groomsmen"
          },
          {
            id: shortid.generate(),
            label: "The Menu",
            desc: "See what will be served!",
            link: "/menu"
          }
        ]
      },
      {
        id: shortid.generate(),
        label: "Album",
        desc: "Flip through the many memories!",
        link: "/album"
      },
      {
        id: shortid.generate(),
        label: "RSVP",
        desc: "Fill out the form today!",
        link: "/rsvp"
      },
      {
        id: shortid.generate(),
        label: "Registry",
        desc: "Help us build our dream home!",
        link: "/registry"
      },
    ]
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
