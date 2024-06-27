import styles from '../app/nav.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.free}>free casino</span> <span className={styles.name}>FREEZINO</span>
      </div>
      <div className={styles.links}>
        <a className={styles.mainPage}>Main page</a>
        <a className={styles.moreGames}>More games</a>
        <a className={styles.myProfile}>My profile</a>
        <a className={styles.help}>Help</a>
        <a className={styles.work}>Work</a>
        <a className={styles.signUp}>Sing up</a>
        <a className={styles.logIn}>Log in</a>
        <div className={styles.icon}> </div>
      </div>
    </nav>
  );
};

export default Navigation;