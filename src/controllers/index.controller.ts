import { Request, Response } from 'express';

export const index = (req: Request, res: Response) : void => {
    res.render('index');
}