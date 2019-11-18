import { Express } from 'express'
import { indexController } from '../controllers/index.server.controller'
import { wikiController } from '../controllers/wiki.server.controller'

export default class IndexRoute {
  constructor(app: Express) {
    app.route('/').get(indexController.index)
    app.route('/msg').get(indexController.msg)
    app.route('/wiki/*').get(wikiController.wiki)
    app.route('/wikiraw/*').get(wikiController.raw)
  }
}
