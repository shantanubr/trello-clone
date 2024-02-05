import React from "react";
import { SbrLogo } from "../sbr-logo";
import HeaderNavigation from "./navigation";

export const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 py-4 px-8 flex items-center justify-center">
      <div className=" w-4/12">
        <SbrLogo />
      </div>
      <div className=" w-4/12">
        <HeaderNavigation />
      </div>
      <div className=" w-4/12">{/* <SbrLogo /> */}</div>
    </div>
  );
};
