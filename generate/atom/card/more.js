'use strict'

var h = require('hastscript')
var block = require('../macro/block')

module.exports = more

function more(href, children) {
  return block(h('a.card.more', {href}, h('.column', h('p', children))))
}
