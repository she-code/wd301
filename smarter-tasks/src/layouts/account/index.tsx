import * as React from "react";
import Appbar from "./AppBar";
import { Outlet } from "react-router-dom";
const AccountLayout = () => {
  return (
    <main>
      <Appbar />
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {/*Route specific contents will come here*/}
        <Outlet />
      </div>
    </main>
  );
};

export default AccountLayout;
