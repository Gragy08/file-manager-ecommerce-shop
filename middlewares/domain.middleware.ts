import { NextFunction, Request, Response } from "express";

export const checkDomain = (req: Request, res: Response, next: NextFunction) => {
  const referer = req.headers.referer;
  const allowedOrigin = process.env.DOMAIN;

  let refererOrigin: string | undefined;
  try {
    refererOrigin = referer ? new URL(referer).origin : undefined;
  } catch {
    refererOrigin = undefined;
  }

  let configuredOrigin: string | undefined;
  try {
    configuredOrigin = allowedOrigin ? new URL(allowedOrigin).origin : undefined;
  } catch {
    configuredOrigin = undefined;
  }

  if (!refererOrigin || !configuredOrigin || refererOrigin !== configuredOrigin) {
    res.send("Truy cập không hợp lệ!");
    return;
  }
  next();
}