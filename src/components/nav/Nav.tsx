// nav is a component as we might have state one the nav items
import styles from "./Nav.module.scss"

function Nav() {
  return (
    <nav className="fade-in-down animation-delay-350">
      <ul className={styles.navList}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;