import React from "react";

import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import Routers from "../router/Routers";

const Layout = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-2 bg-white">
          <SideBar />
        </div>
        <div className="col">
          <TopNav />

          <Routers />
        </div>
      </div>
    </div>
  );
};

export default Layout;
