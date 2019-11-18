import { Request, Response } from 'express'
import Config from '../config/config'
import * as path from 'path'
import * as fs from 'fs'
import * as _ from 'lodash'
import { promisify } from 'util'

const readFileAsync = promisify(fs.readFile)

export default class IndexController {
  public index(req: Request, res: Response, next: Function): void {
    res.render('index', { title: 'Express' })
  }

  public async wiki(req: Request, res: Response): Promise<void> {
    try {
      let requested_path = req.params['0']
      requested_path = _.trim(requested_path, '/')
      let file_path =
        path.join(Config.baseFolder, 'docs', requested_path) + '.md'
      let result = await readFileAsync(file_path, 'utf8')
      res.send({ results: result })
    } catch (e) {
      console.error(e)
      res.statusCode = 404
      res.send({ message: 'page not found' })
    }
  }
  public async raw(req: Request, res: Response): Promise<void> {
    try {
      let requested_path = req.params['0']
      requested_path = _.trim(requested_path, '/')
      let file_path =
        path.join(Config.baseFolder, 'docs', requested_path) + '.md'
      let result = await readFileAsync(file_path, 'utf8')
      res.setHeader('Content-Type', 'text/plain')
      res.send(result)
    } catch (e) {
      console.error(e)
      res.statusCode = 404
      res.send({ message: 'page not found' })
    }
  }
}

export const wikiController = new IndexController()
