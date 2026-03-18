import InstagramIcon from '@assets/icons/instagramIcon.svg?react';
import LinkedinIcon from '@assets/icons/linkedinIcon.svg?react';
import TelegramIcon from '@assets/icons/telegramIcon.svg?react';
import type { FunctionComponent, SVGProps } from 'react';

interface SocialNetworkingService {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  descr: string;
  link: string;
}

interface SocialLinks {
  instagram: SocialNetworkingService;
  telegram: SocialNetworkingService;
  linkedIn: SocialNetworkingService;
}

export const socialLinks: SocialLinks = {
  instagram: {
    Icon: InstagramIcon,
    descr: 'instagram',
    link: 'https://www.instagram.com',
  },
  telegram: {
    Icon: TelegramIcon,
    descr: 'telegram',
    link: 'https://t.me',
  },
  linkedIn: {
    Icon: LinkedinIcon,
    descr: 'linkedIn',
    link: 'https://www.linkedin.com/',
  },
};
