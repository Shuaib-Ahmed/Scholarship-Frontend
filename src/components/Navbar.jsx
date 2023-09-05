import React, { useState } from "react";
import styles from "./styles/navbar.module.css";

import { IoMdSchool } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsXCircleFill } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  const { login, isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={styles.navContainer}>
      <nav className="container">
        <h3 className={styles.navLogo}>
          <IoMdSchool />
          <Link to="/">SCHOLARSHIP</Link>
        </h3>
        <ul className={showNav ? styles.openNav : styles.closeNav}>
          <li className={styles.closeBtn} onClick={() => setShowNav(false)}>
            <BsXCircleFill /> close
          </li>
          {!isAdmin && (
            <>
              <li>
                <HashLink smooth to="/#scholarships">
                  scholarships
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#contact">
                  contact
                </HashLink>
              </li>
            </>
          )}
          {login && isAdmin && (
            <>
              <li>
                <Link to="/create-scholarship">create-scholarship</Link>
              </li>
              <li>
                <Link to="/manage-application">manage-application</Link>
              </li>
            </>
          )}
          {!login && (
            <>
              <li>
                <button onClick={() => navigate("/sign-up")}>sign up</button>
              </li>
              <li>
                <button onClick={() => navigate("/log-in")}>log in</button>
              </li>
            </>
          )}
          {login && !isAdmin && (
            <li>
              <button onClick={() => navigate("/profile")}>
                <CgProfile /> Profile
              </button>
            </li>
          )}
          {login && (
            <li>
              <button
                onClick={() => {
                  dispatch(logoutUser());
                  navigate("/")
                }}
              >
                log out
              </button>
            </li>
          )}
        </ul>
        <div className={styles.openBtn} onClick={() => setShowNav(true)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
