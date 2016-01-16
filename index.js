module.exports = init

var Lynx = require('lynx')

function init(callback) {
  callback(null, 'statsd', StatsD)
}

function StatsD(automait, logger, config) {
  this.automait = automait
  this.logger = logger
  this.config = config
  this.metrics = new Lynx(config.host, config.port)
}

StatsD.prototype.gauge = function (id, value, callback) {
  this.metrics.gauge(this.config.baseId + '.' + id, value)
  callback()
}
