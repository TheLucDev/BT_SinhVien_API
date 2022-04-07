import React from "react";
import { NavLink } from "react-router-dom";

export default function NavRouter() {
  return (
    <div className="container m-4">
      {" "}
      <NavLink exact activeClassName="text-danger" className="mx-3" to="/">
        Trang chủ
      </NavLink>
      <NavLink activeClassName="text-danger" className="mx-3" to="/dssv">
        Danh sách
      </NavLink>
    </div>
  );
}
