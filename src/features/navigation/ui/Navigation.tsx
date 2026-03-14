import styles from './navigation.module.css';
import {
  navigationMenuItemsDesktop,
  navigationMenuItemsMobile,
  type Lang,
} from '@features/navigation/model/navigationData';

interface NavigationProps {
  version: 'desktop' | 'mobile';
  lang: Lang;
}

const Navigation = ({ version, lang }: NavigationProps) => {
  const menuData =
    version === 'desktop'
      ? navigationMenuItemsDesktop
      : navigationMenuItemsMobile;

  return (
    <nav className={styles.nav}>
      <ul className={styles[`list-${version}`]}>
        {menuData.map((item) => {
          return (
            <li className={styles.item} key={item.id}>
              <a href="#" className={styles.link}>
                {item[lang]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
