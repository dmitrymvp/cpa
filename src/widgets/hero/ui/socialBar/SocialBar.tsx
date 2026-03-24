import styles from './socialBar.module.css';
import { socialLinks } from '@shared/model/socialLinks';

function SocialBar() {
  return (
    <ul className={styles.ul}>
      {Object.entries(socialLinks).map(([_, { Icon, descr, link }]) => (
        <li key={descr}>
          <a href={link} className={styles.link} aria-label={`${descr} icon`}>
            <Icon className={styles.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialBar;
