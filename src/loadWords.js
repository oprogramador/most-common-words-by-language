import _ from 'lodash';
import fs from 'fs';
import path from 'path';

let words;

const extension = '.txt';
const dirname = `${__dirname}/resources`;

function loadWords() {
  if (!words) {
    const names = fs.readdirSync(dirname)
      .map(filename => path.basename(filename, extension));
    words = _.zipObject(
      names,
      names.map(name => fs.readFileSync(`${dirname}/${name}${extension}`).toString().split('\n').filter(x => x)),
    );
  }

  return words;
}

export default loadWords;
