export type Lang = 'ru' | 'eng';

type NavigationItem = {
  id: string;
  eng: string;
  ru: string;
};

export const navigationMenuItemsDesktop: NavigationItem[] = [
  { id: 'team', eng: 'TEAM', ru: 'КОМАНДА' },
  { id: 'benefits', eng: 'BENEFITS', ru: 'ПРЕИМУЩЕСТВА' },
  { id: 'joinUs', eng: 'JOIN US', ru: 'С НАМИ' },
];

export const navigationMenuItemsMobile: NavigationItem[] = [
  { id: 'main', eng: 'MAIN', ru: 'ГЛАВНАЯ' },
  ...navigationMenuItemsDesktop,
];
