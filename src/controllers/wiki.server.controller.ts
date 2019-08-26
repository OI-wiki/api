import { Request, Response } from "express";
// import { inspect } from "util";
import Config from "../config/config";
import * as path from "path";
import * as fs from "fs";
import { trim } from "lodash";

export default class IndexController {
  public index(req: Request, res: Response): void {
    res.render("index", { title: "Express" });
  }

  public wiki(req: Request, res: Response): void {
    try {
      let requestedPath = req.params["0"];
      requestedPath = trim(requestedPath, "/");
      const filePath =
        path.join(Config.baseFolder, "docs", requestedPath) + ".md";
      const file_ = fs.readFileSync(filePath, "utf8");
      const result = file_;
      res.send({ status: 1, results: result });
    } catch (e) {
      console.log(e);
      res.send({ status: 0 });
    }
  }
  public raw(req: Request, res: Response): void {
    try {
      let requestedPath = req.params["0"];
      requestedPath = trim(requestedPath, "/");
      const filePath =
        path.join(Config.baseFolder, "docs", requestedPath) + ".md";
      const file_ = fs.readFileSync(filePath, "utf8");
      const result = file_;
      res.setHeader("Content-Type", "text/plain");
      res.send(result);
    } catch (e) {
      console.log(e);
      res.send({ status: 0 });
    }
  }
}

export const wikiController = new IndexController();
