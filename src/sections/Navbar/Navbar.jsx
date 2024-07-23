import React from 'react';
import styles from './NavbarStyles.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
        <ul>
            <li><a href='#hero'>HOME</a></li>
            <li><a href='#projects'>PROJECTS</a></li>
            <li><a href='#skills'>SKILLS</a></li>
            <li><a href='#contact'>CONTACT</a></li>
        </ul>
    </div>
  );
}

export default Navbar;
