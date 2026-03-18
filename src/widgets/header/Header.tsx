import Logo from '@assets/img/logo.svg?react';
import styles from './header.module.css';
import Navigation from '@features/navigation/ui/Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <Navigation version="desktop" lang="eng" />
    </header>
  );
};

export default Header;
