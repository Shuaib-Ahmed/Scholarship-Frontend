import React from "react";
import styles from "./styles/footer.module.css";

import { IoMdSchool } from "react-icons/io";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className="container">
        <h3>
          <IoMdSchool /> Scholarship
        </h3>
        <p>&copy; 2023 Scholarshp all rights reserved</p>
        <div>
          <a
            href="https://react-icons.github.io/react-icons"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareFacebook />
          </a>
          <a
            href="https://react-icons.github.io/react-icons"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareInstagram />
          </a>
          <a
            href="https://react-icons.github.io/react-icons"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
