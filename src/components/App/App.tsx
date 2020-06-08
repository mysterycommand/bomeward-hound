import React, { FC } from 'react';

import styles from './App.module.css';

export const App: FC = () => (
  <div className={styles.app}>
    <ol className={styles.doors}>
      <li className={styles.door}>
        <iframe
          className={styles.room}
          title="https://theweeklyweekly.com/"
          src="https://theweeklyweekly.com/"
        />
      </li>
      <li className={styles.door}>
        <iframe
          className={styles.room}
          title="https://s4y.us"
          src="https://s4y.us"
        />
      </li>
      <li className={styles.door}>
        <iframe
          className={styles.room}
          title="https://mysterycommand.com"
          src="https://mysterycommand.com"
        />
      </li>
      <li className={styles.door}>
        <iframe
          className={styles.room}
          title="https://webglsamples.org/aquarium/aquarium.html"
          src="https://webglsamples.org/aquarium/aquarium.html"
        />
      </li>
    </ol>
    <footer className={styles.hud}>
      <button className={styles.nav}>previous room</button>
      <button className={styles.nav}>next room</button>
    </footer>
  </div>
);
