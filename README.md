# most-common-words-by-language

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/oprogramador/most-common-words-by-language.svg?branch=master)](https://travis-ci.com/oprogramador/most-common-words-by-language
)

[![NPM status](https://nodei.co/npm/most-common-words-by-language.png?downloads=true&stars=true)](https://npmjs.org/package/most-common-words-by-language
)


## Usage

### getWordsList
```js
const { getWordsList } = require('most-common-words-by-language');

getWordsList('french', 200); // returns 200 most common French words
getWordsList('spanish'); // returns 10000 (10000 is the default and max value) most common Spanish words
```

### findWord
```js
const { findWord } = require('most-common-words-by-language');

// returns an object informing about the position of a given word
// in the ranks of the most common words by language (starting from the 1 index)
// the case is ignored
findWord('angeles');
// returns { english: 1788, spanish: 2770 }
```

## Sources
Afrikaans:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/af/af_50k.txt

Albanian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/sq/sq_50k.txt

Arabic:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/ar/ar_50k.txt

Bulgarian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/bg/bg_50k.txt

Bengali:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/bn/bn_50k.txt

Catalan:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/ca/ca_50k.txt

Chinese:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/zh/zh_50k.txt

Czech:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/cs/cs_50k.txt

Danish:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/da/da_50k.txt

Dutch:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/nl/nl_50k.txt

English:
- https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt

Esperanto:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/eo/eo_50k.txt

Estonian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/et/et_50k.txt

Farsi:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/fa/fa_50k.txt

Finnish:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/fi/fi_50k.txt

French:
- https://en.wiktionary.org/wiki/Wiktionary:French_frequency_lists/1-2000
- https://en.wiktionary.org/wiki/Wiktionary:French_frequency_lists/2001-4000
- https://en.wiktionary.org/wiki/Wiktionary:French_frequency_lists/4001-6000
- https://en.wiktionary.org/wiki/Wiktionary:French_frequency_lists/6001-8000
- https://en.wiktionary.org/wiki/Wiktionary:French_frequency_lists/8001-10000

German:
- https://en.wiktionary.org/wiki/User:Matthias_Buchmeier/German_frequency_list-1-5000
- https://en.wiktionary.org/wiki/User:Matthias_Buchmeier/German_frequency_list-5001-10000

Greek:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/el/el_50k.txt

Hebrew:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/he/he_50k.txt

Hindi:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/hi/hi_50k.txt

Hungarian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/hu/hu_50k.txt

Italian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/it/it_full.txt

Indonesian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/id/id_50k.txt

Japanese:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/ja/ja_50k.txt

Kazakh:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/kk/kk_50k.txt

Korean:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/ko/ko_50k.txt

Lithuanian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/lt/lt_50k.txt

Latvian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/lv/lv_50k.txt

Macedonian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/mk/mk_50k.txt

Norwegian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/no/no_50k.txt

Polish:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/pl/pl_50k.txt

Portuguese:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/pt_br/pt_br_50k.txt

Romanian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/ro/ro_50k.txt

Russian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/ru/ru_50k.txt

Slovak:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/sk/sk_50k.txt

Slovenian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/sl/sl_50k.txt

Serbian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/sr/sr_50k.txt

Spanish:
- https://en.wiktionary.org/wiki/User:Matthias_Buchmeier/Spanish_frequency_list-1-5000
- https://en.wiktionary.org/wiki/User:Matthias_Buchmeier/Spanish_frequency_list-5001-10000

Swedish:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/sv/sv_50k.txt

Thai:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/th/th_50k.txt

Turkish:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/tr/tr_50k.txt

Ukrainian:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/uk/uk_50k.txt

Vietnamese:
- https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/vi/vi_50k.txt
