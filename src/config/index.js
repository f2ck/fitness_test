const defaults = require('./config.default');

const DGG_SERVER_ENV = process.env.VUE_APP_DGG_SERVER_ENV;
let BASE = null;
if (DGG_SERVER_ENV) {
  BASE = require(`./config.${DGG_SERVER_ENV}`);
}

module.exports = Object.assign(defaults, BASE);
