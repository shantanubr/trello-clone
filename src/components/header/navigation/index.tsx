import React from "react";
import { NavItem } from "../nav-item";

const HeaderNavigation: React.FC = () => {
  return (
    <>
      <div className="hidden sm:flex items-start justify-around">
        <NavItem routeName={"Home"} routeHref={"/"} />
        <NavItem routeName={"About"} routeHref={"/about"} />
        <NavItem routeName={"Projects"} routeHref={"/projects"} />
        <NavItem routeName={"Resume"} routeHref={"/resume"} />
        <NavItem routeName={"Blog"} routeHref={"/blog"} />
        <NavItem routeName={"Contact"} routeHref={"/contact"} />
      </div>
    </>
  );
};

export default HeaderNavigation;
