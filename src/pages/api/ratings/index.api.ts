/* eslint-disable camelcase */
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const createRatingBodySchema = z.object({
  rate: z.number().min(1).max(5),
  description: z.string().min(1).max(490),
  book_id: z.string(),
  user_id: z.string().uuid(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const allowedMethods = ['GET', 'POST']

  if (!allowedMethods.includes(req.method!)) {
    return res.status(405).end()
  }

  if (req.method === 'GET') {
    const recentRatings = await prisma.rating.findMany({
      include: {
        book: true,
        user: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    return res.json(recentRatings)
  }

  if (req.method === 'POST') {
    const { rate, description, book_id, user_id } =
      createRatingBodySchema.parse(req.body)

    const ratingAlreadyExists = await prisma.rating.findFirst({
      where: {
        book_id,
        user_id,
      },
    })

    if (ratingAlreadyExists) {
      return res.status(400).json({
        message: 'You already have rated this book',
      })
    }

    const rating = await prisma.rating.create({
      data: {
        rate,
        description,
        book: {
          connect: {
            id: book_id,
          },
        },
        user: {
          connect: {
            id: user_id,
          },
        },
      },
    })

    return res.status(201).json(rating)
  }
}
