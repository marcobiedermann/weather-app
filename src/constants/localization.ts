export interface Language {
  id: string;
  name: string;
}

// <ul class="docs-list">
//   <li>
//     <code>af</code> Afrikaans
//   </li>
//   <li>
//     <code>al</code> Albanian
//   </li>
//   <li>
//     <code>ar</code> Arabic
//   </li>
//   <li>
//     <code>az</code> Azerbaijani
//   </li>
//   <li>
//     <code>bg</code> Bulgarian
//   </li>
//   <li>
//     <code>ca</code> Catalan
//   </li>
//   <li>
//     <code>cz</code> Czech
//   </li>
//   <li>
//     <code>da</code> Danish
//   </li>
//   <li>
//     <code>de</code> German
//   </li>
//   <li>
//     <code>el</code> Greek
//   </li>
//   <li>
//     <code>en</code> English
//   </li>
//   <li>
//     <code>eu</code> Basque
//   </li>
//   <li>
//     <code>fa</code> Persian (Farsi)
//   </li>
//   <li>
//     <code>fi</code> Finnish
//   </li>
//   <li>
//     <code>fr</code> French
//   </li>
//   <li>
//     <code>gl</code> Galician
//   </li>
//   <li>
//     <code>he</code> Hebrew
//   </li>
//   <li>
//     <code>hi</code> Hindi
//   </li>
//   <li>
//     <code>hr</code> Croatian
//   </li>
//   <li>
//     <code>hu</code> Hungarian
//   </li>
//   <li>
//     <code>id</code> Indonesian
//   </li>
//   <li>
//     <code>it</code> Italian
//   </li>
//   <li>
//     <code>ja</code> Japanese
//   </li>
//   <li>
//     <code>kr</code> Korean
//   </li>
//   <li>
//     <code>la</code> Latvian
//   </li>
//   <li>
//     <code>lt</code> Lithuanian
//   </li>
//   <li>
//     <code>mk</code> Macedonian
//   </li>
//   <li>
//     <code>no</code> Norwegian
//   </li>
//   <li>
//     <code>nl</code> Dutch
//   </li>
//   <li>
//     <code>pl</code> Polish
//   </li>
//   <li>
//     <code>pt</code> Portuguese
//   </li>
//   <li>
//     <code>pt_br</code> Português Brasil
//   </li>
//   <li>
//     <code>ro</code> Romanian
//   </li>
//   <li>
//     <code>ru</code> Russian
//   </li>
//   <li>
//     <code>sv, se</code> Swedish
//   </li>
//   <li>
//     <code>sk</code> Slovak
//   </li>
//   <li>
//     <code>sl</code> Slovenian
//   </li>
//   <li>
//     <code>sp, es</code> Spanish
//   </li>
//   <li>
//     <code>sr</code> Serbian
//   </li>
//   <li>
//     <code>th</code> Thai
//   </li>
//   <li>
//     <code>tr</code> Turkish
//   </li>
//   <li>
//     <code>ua, uk</code> Ukrainian
//   </li>
//   <li>
//     <code>vi</code> Vietnamese
//   </li>
//   <li>
//     <code>zh_cn</code> Chinese Simplified
//   </li>
//   <li>
//     <code>zh_tw</code> Chinese Traditional
//   </li>
//   <li>
//     <code>zu</code> Zulu
//   </li>
// </ul>;

export const languages: Language[] = [
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
];

export const supportedLanguages = ['de', 'en'];

export interface Unit {
  id: string;
  name: string;
}

export const units = [
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
];
