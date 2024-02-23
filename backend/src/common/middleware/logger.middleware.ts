import { Request, Response, NextFunction } from 'express';
//functional middleware to log requests between routes and controllers

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(req.method, req.path, req.body, res.statusCode);
  next();
}
