interface Language {
  id: string;
  name: string;
}

const languages: readonly Language[] = [
  {
    id: 'ar',
    name: 'Arabic',
  },
  {
    id: 'bg',
    name: 'Bulgarian',
  },
  {
    id: 'ca',
    name: 'Catalan',
  },
  {
    id: 'zh',
    name: 'Chinese Simplified',
  },
  {
    id: 'hr',
    name: 'Croatian',
  },
  {
    id: 'cz',
    name: 'Czech',
  },
  {
    id: 'nl',
    name: 'Dutch',
  },
  {
    id: 'en',
    name: 'English',
  },
  {
    id: 'fi',
    name: 'Finnish',
  },
  {
    id: 'fr',
    name: 'French',
  },
  {
    id: 'de',
    name: 'German',
  },
  {
    id: 'el',
    name: 'Greek',
  },
  {
    id: 'gl',
    name: 'Galician',
  },
  {
    id: 'hu',
    name: 'Hungarian',
  },
  {
    id: 'it',
    name: 'Italian',
  },
  {
    id: 'ja',
    name: 'Japanese',
  },
  {
    id: 'kr',
    name: 'Korean',
  },
  {
    id: 'la',
    name: 'Latvian',
  },
  {
    id: 'lt',
    name: 'Lithuanian',
  },
  {
    id: 'mk',
    name: 'Macedonian',
  },
  {
    id: 'fa',
    name: 'Persian (Farsi)',
  },
  {
    id: 'pl',
    name: 'Polish',
  },
  {
    id: 'pt',
    name: 'Portuguese',
  },
  {
    id: 'ro',
    name: 'Romanian',
  },
  {
    id: 'ru',
    name: 'Russian',
  },
  {
    id: 'sk',
    name: 'Slovak',
  },
  {
    id: 'sl',
    name: 'Slovenian',
  },
  {
    id: 'es',
    name: 'Spanish',
  },
  {
    id: 'se',
    name: 'Swedish',
  },
  {
    id: 'tr',
    name: 'Turkish',
  },
  {
    id: 'ua',
    name: 'Ukrainian',
  },
  {
    id: 'vi',
    name: 'Vietnamese',
  },
] as const;

const supportedLanguages = ['de', 'en'] as const;

type SupportedLanguage = (typeof supportedLanguages)[number];

interface Unit {
  id: string;
  name: string;
}

const units: readonly Unit[] = [
  {
    id: 'imperial',
    name: 'imperial',
  },
  {
    id: 'metric',
    name: 'metric',
  },
  {
    id: 'standard',
    name: 'standard',
  },
] as const;

const supportedUnits = ['imperial', 'metric', 'standard'] as const;

type SupportedUnit = (typeof supportedUnits)[number];

export type { Language, SupportedLanguage, SupportedUnit, Unit };
export { languages, supportedLanguages, supportedUnits, units };
