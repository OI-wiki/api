import { sync } from 'glob'
import { union } from 'lodash'
import { env } from 'process'

export default class Config {
  public static port: number = 3000
  public static routes: string = './dist/routes/**/*.js'
  public static models: string = './dist/models/**/*.js'
  public static useMongo: boolean = false
  public static baseFolder: string = env.OI_WIKI_PATH || '/home/ir1d/Documents/repo/OI-wiki'
  public static mongodb =
    process.env.NODE_ENV === 'docker'
      ? 'mongodb://mongo:27017/express-typescript-starter'
      : 'mongodb://localhost:27017/express-typescript-starter'
  public static globFiles(location: string): string[] {
    return union([], sync(location))
  }

  //

}
