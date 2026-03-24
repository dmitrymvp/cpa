import { socialLinks } from '@shared/model/socialLinks';
import styles from './footer.module.css';
import { scrollToTopText } from '@shared/model/i18n';
import type { Lang } from '@shared/types/language';

interface FooterProps {
  lang: Lang;
}

const Footer = ({ lang }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        {Object.entries(socialLinks).map(([_, { descr, link }]) => (
          <li key={descr}>
            <a href={link} className={styles.link}>
              {descr}
            </a>
          </li>
        ))}
      </ul>

      <a href="#top" className={styles.scrollButton}>
        <span className={styles.span}>{scrollToTopText[lang]}</span>
      </a>
    </footer>
  );
};

export default Footer;
