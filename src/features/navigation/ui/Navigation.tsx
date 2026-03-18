import { navigationList } from '@shared/model/i18n';
import styles from './navigation.module.css';
import { type Lang } from '@shared/types/language';

interface NavigationProps {
  version: 'desktop' | 'mobile';
  lang: Lang;
}

const Navigation = ({ version, lang }: NavigationProps) => {
  const data = navigationList[lang];

  const renderNavigationList =
    version === 'desktop'
      ? Object.values(data).filter((id) => id !== 'MAIN')
      : Object.values(data);

  return (
    <nav className={styles.nav}>
      <ul className={styles[`list-${version}`]}>
        {renderNavigationList.map((item) => (
          <li className={styles.listItem} key={item}>
            <a href="#" className={styles.link}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
