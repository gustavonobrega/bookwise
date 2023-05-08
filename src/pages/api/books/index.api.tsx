import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const data = await prisma.book.findMany({
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
      categories: {
        select: {
          category: true,
        },
      },
    },
  })

  const books = data.map((book) => {
    const totalRanting = book.ratings.reduce(
      (acc, rating) => (acc += rating.rate),
      0,
    )

    const ratingAvg = totalRanting / book.ratings.length

    return {
      id: book.id,
      author: book.author,
      cover_url: book.cover_url,
      name: book.name,
      summary: book.summary,
      rate: ratingAvg,
      categories: book.categories,
    }
  })

  return res.json(books)
}
