import { CustomLink } from '@/components/CustomLink'
import { Ratings } from '@/components/Ratings'

import { CaretRight } from 'phosphor-react'
import {
  LastReadBookDetails,
  LastReadCard,
  LastReadCardHeader,
  LastReadContainer,
  LastReadHeader,
  MainInfo,
} from './styles'
import { ILastReadBook } from '..'
import Image from 'next/image'
import { useDetailedBookDialog } from '@/hooks/useDetailedBookDialog'

interface LastReadProps {
  lastRead?: ILastReadBook
  userId: string | undefined
}

export function LastRead({ lastRead, userId }: LastReadProps) {
  const { DetailedBookDialog, showDialog } = useDetailedBookDialog()

  return (
    <LastReadContainer>
      <LastReadHeader>
        <h4>Sua última leitura</h4>
        <CustomLink href={`/profile/${userId}`} icon={<CaretRight size={16} />}>
          Ver todas
        </CustomLink>
      </LastReadHeader>

      <DetailedBookDialog />

      <LastReadCard onClick={() => showDialog(lastRead!.book.id)}>
        <Image
          src={lastRead!.book.cover_url}
          alt={lastRead!.book.name}
          width={108}
          height={152}
        />

        <LastReadBookDetails>
          <LastReadCardHeader>
            <span>{lastRead?.created_at}</span>
            <Ratings size={16} rate={lastRead!.rate} />
          </LastReadCardHeader>

          <MainInfo>
            <strong>{lastRead?.book.name}</strong>
            <span>{lastRead?.book.author}</span>

            <p>{lastRead?.book.summary}</p>
          </MainInfo>
        </LastReadBookDetails>
      </LastReadCard>
    </LastReadContainer>
  )
}
