import type { Lang } from '@shared/types/language';

export const navigationList: Record<Lang, Record<string, string>> = {
  en: {
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
  en: 'SCROLL TO TOP',
  ru: 'НАВЕРХ',
};

export const heroSectionText = {
  title: 'PRACTICE MAKES',
  animatedText: ['PROFIT', 'GROWTH', 'SKILLS'],
  en: {
    subtitle:
      'We provide effective solutions, tested and refined on our own products and ad budgets',
    button: 'GET IN TOUCH',
  },
  ru: {
    subtitle:
      'Предлагаем эффективные решения, которые уже протестили на своих продуктах и бюджетах',
    button: 'ПОЛУЧИТЬ ПРОФИТ',
  },
};
