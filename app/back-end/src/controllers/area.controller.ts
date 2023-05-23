import { Request, Response } from "express";
import areaService from "../services/area.service";

const getAll = async (req: Request, res: Response) => {
  const response = await areaService.getAll();
  if(!response) return res.status(400).json({ message: 'Some error' });
  return res.status(200).json(response);
}

const getByArea = async (req: Request, res: Response) => {
  const { q: query } = req.query;
  if(query) {
    const response = await areaService.getByArea(query as string | '');
    if(!response) return res.status(400).json({ message: 'Some error' });
    return res.status(200).json(response);
  }

  const response = await areaService.getAll();
  if(!response) return res.status(400).json({ message: 'Some error' });
  return res.status(200).json(response);
}

export default {
  getAll,
  getByArea
}