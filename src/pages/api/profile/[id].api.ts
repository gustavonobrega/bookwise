import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  const id = String(req.query.id)

  if (session?.user.id !== id) {
    return res.status(401).end()
  }

  const userLastRead = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      ratings: {
        orderBy: {
          created_at: 'desc',
        },
        include: {
          book: true,
        },
      },
    },
  })

  return res.json(userLastRead)
}
