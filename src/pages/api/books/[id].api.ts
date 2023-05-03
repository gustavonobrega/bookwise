import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const id = String(req.query.id)

  const book = await prisma.book.findUnique({
    where: {
      id,
    },
    include: {
      ratings: {
        include: {
          user: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      },
      categories: {
        select: {
          category: true,
        },
      },
    },
  })

  if (!book) {
    return res.status(400).json({ message: 'Book does not exist.' })
  }

  const avgRate = book.ratings.reduce((acc, ratingBook, i) => {
    acc += ratingBook.rate

    if (i === book.ratings.length - 1) {
      acc = acc / book.ratings.length
    }

    return acc
  }, 0)

  return res.json({
    avgRate,
    ...book,
  })
}
