import styles from './NavButton.module.scss';
import { FC } from 'react';
import cn from 'classnames';
import menu from './menu.png';

interface Props {
  isActive: boolean;
  onClick: () => void;
}

export const NavButton: FC<Props> = ({ isActive, onClick }) => {
  return (
    <button
      type="button"
      aria-expanded={isActive}
      onClick={onClick}
      className={cn(styles.navButton)}
    >
      <img
        src="/menu.png"
        alt="Mixer"
      />
    </button>
  );
};
