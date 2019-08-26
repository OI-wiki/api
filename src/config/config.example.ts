import { sync } from "glob";
import { union } from "lodash";

export default class Config {
  public static port = 3000;
  public static routes = "./dist/routes/**/*.js";
  public static models = "./dist/models/**/*.js";
  public static useMongo = false;
  public static baseFolder = "/var/www/OI-wiki";
  public static mongodb =
    process.env.NODE_ENV === "docker"
      ? "mongodb://mongo:27017/express-typescript-starter"
      : "mongodb://localhost:27017/express-typescript-starter";
  public static globFiles(location: string): string[] {
    return union([], sync(location));
  }

  //
}
