const routes = require('next-routes')

module.exports = routes()
.add('index')
.add('channel', '/:slug.:id', 'channel')
.add('podcast', '/:slugChannel.:id/:slung.:id', 'podcast')