// import Image from "next/image";
// export default function Navigation (){
//     return (
//         <div> 
//             <p> Navigation </p>
//         </div>
//     );
// }


// import styles from '../app/nav.module.css';
// const Navigation = () => {
//   return (
//     <nav className={styles.nav}>
//       <div className={styles.logo}>
//         <span className={styles.free}>free casino</span> <span className={styles.name}>FREEZINO</span>
//       </div>
//       <div className={styles.links}>
//       {/* <div className={styles.buttonM}> */}
//         <button className={styles.mainPage}>Main page</button>
//         <button className={styles.moreGames}>More games</button>
//         <button className={styles.myProfile}>My profile</button>
//         <button className={styles.help}>Help</button>
//         <button className={styles.work}>Work</button>
//         <button className={styles.signUp}>Sing up</button>
//         <button className={styles.logIn}>Log in</button>
//         <div className={styles.icon}>
//          {/* </div> */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

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