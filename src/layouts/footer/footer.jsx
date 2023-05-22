//
//~~ _.  (Footer) - for showing necessary, handy informations for Explorers and GM. Content depends on different conditions, like who's logged in and "what has this player discovered"
//
//       _._. What can i do (Button) - opens modal "What can i do? Possible actions in your turn and outside of it"
//
//       _._. Initiative (Scrollable gallery) - shows the queque of initiative for meet's, which were given there by the GM.
//
//       _._. Active Soulers (List of Buttons)- [GM ONLY VISIBILITY] for controlling active mp3 files (both playing and paused - stoping files arent showing here)
//
//       _._. Active timers (List of Buttons) - [GM ONLY VISIBILITY] for controlling
//
//       _._. Chat between GM and Explrorers (Button) - opens modal "Chat between GM and Explrorers"
//
//       _._. Show/hide full footer (Button) - shows or hides the content from previous points
//

import styles from "src/styles/sass/styles-all.module.scss";
//hook2 - semantically not correct yet

// hook1 - warunki renderowania zasuguja na dedykowany podpunkt w spisie tresci, czy to unwierslana funkcja zewnetrzna?
const Footer = () => {
  let warunekRoliZalogowanego = false;
  let warunekCzyInicjatywaAktywna = false;
  return (
    //
    //~~ _.  (Footer) - for showing necessary, handy informations for Explorers and GM. Content depends on different conditions, like who's logged in and "what has this player discovered"
    //
    <nav className={styles["footer-container"]}>
      {/* 
      //       _._. What can i do (Button) - opens modal "What can i do? Possible actions in your turn and outside of it"
      */}
      {warunekRoliZalogowanego && (
        <button className={styles["what-can-i-do"]}>
          what can i do as Explorer
        </button>
      )}
      {/* 
      //       _._. Initiative (Scrollable gallery) - shows the queque of initiative for meet's, which were given there by the GM.
      */}
      {warunekCzyInicjatywaAktywna && (
        <ul className={styles["list-of-initiative"]}>
          <li>meet1</li>
          <li>meet2</li>
        </ul>
      )}
      {/* 
      //       _._. Active Soulers (List of Buttons)- [GM ONLY VISIBILITY] for controlling active mp3 files (both playing and paused - stoping files arent showing here)
      */}
      {warunekRoliZalogowanego && (
        <ul className={styles["list-of-active-soulers"]}>
          <li>souler1</li>
          <li>souler2</li>
        </ul>
      )}
      {/* 
      //       _._. Active timers (List of Buttons) - [GM ONLY VISIBILITY] for controlling
      */}
      {warunekRoliZalogowanego && (
        <ul className={styles["list-of-active-timers"]}>
          <li>timer1</li>
          <li>timer2</li>
        </ul>
      )}
      {/* 
      //       _._. Chat between GM and Explrorers (Button) - opens modal "Chat between GM and Explrorers"
      */}
      {warunekRoliZalogowanego && <button className={styles["chat"]}></button>}
      {/* 
      //       _._. Show/hide full footer (Button) - shows or hides the content from previous points
      */}
      <button className={styles["toggle-visibility"]}>
        /\ show/hide footer
      </button>
    </nav>
  );
};
export default Footer;
