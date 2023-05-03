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

interface LastReadProps {
  lastRead?: ILastReadBook
}

export function LastRead({ lastRead }: LastReadProps) {
  return (
    <LastReadContainer>
      <LastReadHeader>
        <h4>Sua última leitura</h4>
        <CustomLink href="/profile" icon={<CaretRight size={16} />}>
          Ver todas
        </CustomLink>
      </LastReadHeader>

      <LastReadCard>
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
