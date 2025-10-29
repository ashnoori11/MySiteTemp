export type Language = 'en' | 'ar' | 'ckb' | 'ku';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
}

export const languages: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', direction: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', direction: 'rtl' },
  { code: 'ckb', name: 'Kurdish (Sorani)', nativeName: 'کوردی (سۆرانی)', direction: 'rtl' },
  { code: 'ku', name: 'Kurdish (Kurmanji)', nativeName: 'Kurdî (Kurmancî)', direction: 'ltr' },
];
