import React from "react";
import { Bell, PersonCircle } from "react-bootstrap-icons";

function Header() {
  const dropDownList = ["Profile", "Settings", "Logout"];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="ms-3 p-2 navbar-brand fs-4 text-start" href="#">
            HireSift
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="btn-group me-5 pe-5 d-flex flex-row align-item-center justify-content-evenly align-items-center">
            <div className="pe-3">
              <Bell size={20} />
            </div>
            <div className="ps-3">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <PersonCircle size={25} />
              </button>
              <ul className="dropdown-menu">
                {dropDownList.map((item, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
