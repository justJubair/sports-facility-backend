import { NextFunction, Request, RequestHandler, Response } from 'express';

interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
}

export const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  return res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};