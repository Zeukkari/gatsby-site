import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Blog",
      leftIcon: <FontIcon>list</FontIcon>,
      component: Link,
      to: "/blog"
    },
    {
      primaryText: "About",
      leftIcon: <FontIcon>person</FontIcon>,
      component: Link,
      to: "/about"
    },
    {
      divider: true
    }
  ];

  if (config.projectLinks) {
    NavList.push({
      primaryText: "Projects"
    });
    config.projectLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
    NavList.push({
      divider: true
    });
  }

  if (config.userLinks) {
    NavList.push({
      primaryText: "Contact"
    });
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  return NavList;
}
export default GetNavList;
