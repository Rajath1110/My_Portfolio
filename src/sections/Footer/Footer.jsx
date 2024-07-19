import styles from './FooterStyles.module.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {year} Rajath Rajeevan. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
