const getOptions = require('loader-utils').getOptions;
const valildateOptions = require('schema-utils');

exports.default = function loader(source) {
  const options = getOptions(this);
  // console.log('llllllloooooaaaddddeerrrr: ', this, options, source);
  return source + '/*ttag*/';
}
