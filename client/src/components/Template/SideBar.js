import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/logo.png`} alt="" />
      </Link>
      <header>
        <h2>Interview Diaries</h2>
        <p><a href="mailto:placement@coep.ac.in">Placement Cell Mail ID</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About </h2>
      <p>
        This is a portal where juniors can read Interview experiences of their seniors.
        Moreover a doubt forum has also been provided where juniors can post their doubts.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">Made for DBMS Project</p>
    </section>
  </section>
);

export default SideBar;
