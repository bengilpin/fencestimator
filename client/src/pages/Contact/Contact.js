import React from "react";
import "./Contact.scss";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

function ContactPage() {
  return (
    <div className="container">
      <h1 className="container__h1">Contact Me</h1>
      <p className="container__p">Feel free to reach out to me through the following channels:</p>
      <ul className="container__ul">
        <li>
          <a href="https://github.com/bengilpin"><FaGithub className="icon"/>GitHub</a>
        </li>
        <li>
          <a href="mailto:bengilpin@icloud.com"><FaEnvelope className="icon"/>Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/your-profile"><FaLinkedin className="icon"/>LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactPage;
