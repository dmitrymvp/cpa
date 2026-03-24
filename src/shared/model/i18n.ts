import type { Lang } from '@shared/types/language';

export const navigationList: Record<Lang, Record<string, string>> = {
  eng: {
    main: 'MAIN',
    team: 'TEAM',
    benefits: 'BENEFITS',
    joinUs: 'JOIN US',
  },
  ru: {
    main: 'ГЛАВНАЯ',
    team: 'КОМАНДА',
    benefits: 'ПРЕИМУЩЕСТВА',
    joinUs: 'С НАМИ',
  },
};

export const scrollToTopText = {
  eng: 'SCROLL TO TOP',
  ru: 'НАВЕРХ',
};
