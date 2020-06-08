import React, { FC, useEffect, useRef, useState, useCallback } from 'react';
import { animated, useTransition } from 'react-spring';

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
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

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

  const onClickPrev = useCallback(() => {
    setCurrentRoom((c) => (c + rooms.length - 1) % rooms.length);
    setDirection('prev');
  }, []);

  const onClickNext = useCallback(() => {
    setCurrentRoom((c) => (c + 1) % rooms.length);
    setDirection('next');
  }, []);

  const transitions = useTransition(currentRoom, (p) => p, {
    enter: { transform: 'translate3d(0%, 0, 0)' },
    leave: {
      transform: `translate3d(${direction === 'next' ? '-' : ''}100%, 0, 0)`,
    },
  });

  return (
    <div className={styles.app}>
      <ol ref={doorsRef} className={styles.doors}>
        {transitions.map(({ item, props, key }) => {
          const room = rooms[item];

          return (
            <animated.li key={key} className={styles.door} style={props}>
              <iframe className={styles.room} title={room} src={room} />
            </animated.li>
          );
        })}
      </ol>
      <footer className={styles.hud}>
        <button className={styles.nav} onClick={onClickPrev}>
          previous room
        </button>
        <button className={styles.nav} onClick={onClickNext}>
          next room
        </button>
      </footer>
    </div>
  );
};
