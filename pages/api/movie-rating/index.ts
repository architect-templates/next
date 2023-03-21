import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const movie_rating = await prisma.movieRating.create({ data: { title: req.body.title, rating: parseInt(req.body.rating) } });
    return res.status(201).json(movie_rating);
  }
};
