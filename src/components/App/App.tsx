import React, { FC, useEffect, useRef, useState } from 'react';

import styles from './App.module.css';

const rooms: string[] = [
  'https://theweeklyweekly.com/',
  'https://s4y.us',
  'https://mysterycommand.com',
  'https://webglsamples.org/aquarium/aquarium.html',
];

export const App: FC = () => {
  const doorsRef = useRef<HTMLOListElement>(null);
  const innerWidthRef = useRef(0);

  const [currentRoom, setCurrentRoom] = useState(0);

  useEffect(() => {
    const onResize = () => {
      innerWidthRef.current = window.innerWidth;
    };
    onResize();

    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    doorsRef.current?.scrollTo({
      left: innerWidthRef.current * currentRoom,
      behavior: 'smooth',
    });
  }, [currentRoom]);

  return (
    <div className={styles.app}>
      <ol ref={doorsRef} className={styles.doors}>
        {rooms.map((room) => (
          <li key={room} className={styles.door}>
            <iframe className={styles.room} title={room} src={room} />
          </li>
        ))}
      </ol>
      <footer className={styles.hud}>
        <button
          className={styles.nav}
          onClick={() => {
            setCurrentRoom((currentRoom + rooms.length - 1) % rooms.length);
          }}
        >
          previous room
        </button>
        <button
          className={styles.nav}
          onClick={() => {
            setCurrentRoom((currentRoom + 1) % rooms.length);
          }}
        >
          next room
        </button>
      </footer>
    </div>
  );
};
