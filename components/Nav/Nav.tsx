import styles from './Nav.module.scss';
import { FC, useEffect, useRef, useState } from 'react';
import { NavButton } from './NavButton';
import cn from 'classnames';
import { createPortal } from 'react-dom';

const LINKS = [
  {
    label: 'renta',
    href: '/'
  },
  {
    label: 'nosotros',
    href: '/nosotros'
  },
  {
    label: 'montaje & recogida',
    href: '/montajeyrecogida'
  },
  {
    label: 'contacto',
    href: '/contacto'
  }
];

const SOCIAL = [
  {
    label: 'instagram',
    href: 'https://instagram.com/ironhausrentals'
  },
  {
    label: 'facebook',
    href: 'https://facebook.com/ironhausrentals'
  },
  {
    label: 'twitter',
    href: 'https://twitter.com/ironhausrentals'
  }
];

export const Nav: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const scrollPosRef = useRef<number>(NaN);
  const onNavToggle = () => {
    setIsActive(isActive => !isActive);
  };
  useEffect(() => {
    if (!isActive) return;
    scrollPosRef.current = window.scrollY;
    document.body.classList.add('fixed');
    document.body.style.top = `-${scrollPosRef.current}px`;
    return () => {
      document.body.classList.remove('fixed');
      document.body.style.top = 'unset';
      window.scrollTo({
        top: scrollPosRef.current,
        left: 0,
        behavior: 'instant'
      })
    };
  }, [isActive]);
  return (
    <>
      <NavButton isActive={isActive} onClick={onNavToggle} />
      {createPortal((
        <nav className={styles.nav}>
          <div
            className={cn(styles.navItems, {
              [styles.navItemsActive]: isActive
            })}
          >
            <div
              className={cn(styles.linkWrapper, {
                [styles.linkWrapperVisible]: isActive
              })}
            >
              <a
                href=""
                className={styles.linkX}
                onClick={(e) => {
                  e.preventDefault();
                  setIsActive(false);
                }}
              >
                x
              </a>
            </div>
            <div
              className={cn(styles.linkWrapper, styles.ironhaus, {
                [styles.linkWrapperVisible]: isActive
              })}
            >
              <a
                href=""
                className={styles.link}
                onClick={(e) => {
                  e.preventDefault();
                  setIsActive(false);
                }}
              >
                iron . haus
              </a>
            </div>
            {LINKS.map((link, i) => (
              <div
                key={link.href}
                style={{ transitionDelay: isActive ? `${(i + 1) * 0.2}s` : '0s' }}
                className={cn(styles.linkWrapper, {
                  [styles.linkWrapperVisible]: isActive
                })}
              >
                <a
                  href={link.href}
                  className={styles.link}
                >
                  {link.label}
                </a>
              </div>
            ))}
            <div className={styles.bottom}>
              {SOCIAL.map((link, i) => (
                <div
                  key={link.href}
                  style={{ transitionDelay: isActive ? `${(i + 7) * 0.2}s` : '0s' }}
                  className={cn(styles.linkWrapper, {
                    [styles.linkWrapperVisible]: isActive
                  })}
                >
                  <a
                    href={link.href}
                    className={styles.link}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </nav>
      ), document.querySelector('#nav-portal')!)}
    </>
  );
};
