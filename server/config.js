const { parse } = require('properties');
const { join } = require('path');
const { has, get } = require('lodash');
const { readFileSync } = require('fs');

const confDir = join(process.cwd(), 'config');

const defaultConf = readFileSync(join(confDir, 'default.conf'), 'utf-8');

let configure = parse(defaultConf, { sections: true });

module.exports = {
  configure,
  conf: path => {
    if (!has(configure, path)) throw Error(`config ${path} is missing`);
    else return get(configure, path);
  }
};
