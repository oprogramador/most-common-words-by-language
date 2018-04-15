# most-common-words-by-language

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oprogramador/most-common-words-by-language.svg?branch=master)](https://travis-ci.org/oprogramador/most-common-words-by-language
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

## Sources
English:
- https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt

French:
- https://en.wiktionary.org/wiki/Wiktionary:French_frequency_lists/1-2000
- https://en.wiktionary.org/wiki/Wiktionary:French_frequency_lists/2001-4000
- https://en.wiktionary.org/wiki/Wiktionary:French_frequency_lists/4001-6000
- https://en.wiktionary.org/wiki/Wiktionary:French_frequency_lists/6001-8000
- https://en.wiktionary.org/wiki/Wiktionary:French_frequency_lists/8001-10000

Spanish:
- https://en.wiktionary.org/wiki/User:Matthias_Buchmeier/Spanish_frequency_list-1-5000
- https://en.wiktionary.org/wiki/User:Matthias_Buchmeier/Spanish_frequency_list-5001-10000
