import React from "react";
import { Header } from "../header";

type Props = {
  MainContent: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ MainContent }) => {
  return (
    <>
      <Header />
      {MainContent}
    </>
  );
};
