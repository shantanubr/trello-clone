import React from "react";
import { useLocation } from "react-router-dom";

interface NavItemProps {
  routeName: string;
  routeHref: string;
}

export const NavItem: React.FC<NavItemProps> = ({ routeName, routeHref }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="flex flex-col">
      <a
        href={routeHref}
        style={{
          color: location.pathname === routeHref ? "#FF2020" : undefined,
        }}
        className="px-4 text-lg font-medium self-center hover:text-rose-600"
      >
        {routeName}
      </a>
      {location.pathname === routeHref ? (
        <div
          className="hidden sm:flex w-4/5 mt-1 self-center h-0.5 rounded-xl"
          style={{
            backgroundColor: "#FF2020",
          }}
        />
      ) : null}
    </div>
  );
};
