import React from "react";
import styles from "./styles/contact.module.css";

import { AiFillPhone, AiOutlineSend } from "react-icons/ai";

const ContactSection = () => {
  return (
    <section id="contact">
      <h2 className="sectionTitle">
        <AiFillPhone /> Contact us
      </h2>
      <div className={`container ${styles.contactContainer}`}>
        <form className={styles.left}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Please enter your email"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Please enter your message"
            ></textarea>
          </div>
          <button type="submit" className="primaryBtn">
            <AiOutlineSend /> Send
          </button>
        </form>
        <div className={styles.right}>
          <img src="image/contact.jpg" alt="contact" />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
