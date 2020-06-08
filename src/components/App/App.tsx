import React, { FC, useEffect, useRef, useState, useCallback } from 'react';
import { animated, useTransition } from 'react-spring';

import styles from './App.module.css';

const urls: string[] = [
  'https://theweeklyweekly.com/',
  'https://s4y.us',
  'https://mysterycommand.com',
  'https://webglsamples.org/aquarium/aquarium.html',
];

export const App: FC = () => {
  const doorsRef = useRef<HTMLOListElement>(null);
  const innerWidthRef = useRef(0);

  const [room, setRoom] = useState(0);
  const [dir, setDir] = useState<'next' | 'prev'>('next');

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
    setRoom((r) => (r + urls.length - 1) % urls.length);
    setDir('prev');
  }, []);

  const onClickNext = useCallback(() => {
    setRoom((r) => (r + 1) % urls.length);
    setDir('next');
  }, []);

  const transitions = useTransition(room, (p) => p, {
    enter: { transform: 'translate3d(0%, 0, 0)' },
    leave: {
      transform: `translate3d(${dir === 'next' ? -100 : 100}%, 0, 0)`,
    },
  });

  return (
    <div className={styles.app}>
      <ol ref={doorsRef} className={styles.doors}>
        {transitions.map(({ item, props, key }) => {
          const url = urls[item];

          return (
            <animated.li key={key} className={styles.door} style={props}>
              <iframe className={styles.room} title={url} src={url} />
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
