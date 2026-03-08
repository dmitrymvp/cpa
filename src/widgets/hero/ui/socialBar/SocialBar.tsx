import InstagramIcon from '../../../../assets/icons/instagramIcon.svg?react';
import LinkedinIcon from '../../../../assets/icons/linkedinIcon.svg?react';
import TelegramIcon from '../../../../assets/icons/telegramIcon.svg?react';
import style from './socialBar.module.css';

function SocialBar() {
  const data = [
    [InstagramIcon, 'instagram'],
    [TelegramIcon, 'telegram'],
    [LinkedinIcon, 'linkedin'],
  ] as const;

  return (
    <ul className={style.ul}>
      {data.map(([Icon, descr]) => {
        return (
          <li key={descr}>
            <a href="#" className={style.link} aria-label={`${descr} icon`}>
              <Icon className={style.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialBar;
