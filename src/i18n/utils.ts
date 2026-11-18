import { en } from './en';
import { id } from './id';

export type Lang = 'en' | 'id';
const dicts = { en, id };

export const getDict = (lang: Lang) => dicts[lang];
export const homePath = (lang: Lang) => (lang === 'en' ? '/' : '/id/');
export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'id' : 'en');

export const site = {
  email: 'wisnhuswardhana@gmail.com',
  whatsapp: 'https://wa.me/6281217794788',
  linkedin: 'https://www.linkedin.com/in/wisnhuswardhana',
  github: 'https://github.com/wisnhusurya',
  cv: '/cv.pdf',
};
