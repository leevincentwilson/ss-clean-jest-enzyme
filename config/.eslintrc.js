const eslint = require('ss-clean-lint');
eslint.env = eslint.env || {};
eslint.env.jest = true;
module.exports = eslint;
