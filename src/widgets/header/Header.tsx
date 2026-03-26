import Logo from '@assets/img/logo.svg?react';
import styles from './header.module.css';
import Navigation from '@features/navigation/ui/Navigation';
import type { Lang } from '@shared/types/language';

interface HeaderProps {
  lang: Lang;
}

const Header = ({ lang }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Logo className="logo" />
      <Navigation version="desktop" lang={lang} />
    </header>
  );
};

export default Header;
