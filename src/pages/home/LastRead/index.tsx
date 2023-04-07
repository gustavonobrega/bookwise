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

export function LastRead() {
  return (
    <LastReadContainer>
      <LastReadHeader>
        <h4>Sua última leitura</h4>
        <CustomLink href="/profile" icon={<CaretRight size={16} />}>
          Ver todas
        </CustomLink>
      </LastReadHeader>

      <LastReadCard>
        <img src="https://github.com/gustavonobrega.png" alt="" />

        <LastReadBookDetails>
          <LastReadCardHeader>
            <span>Há 2 dias</span>
            <Ratings size={16} />
          </LastReadCardHeader>

          <MainInfo>
            <strong>Entendendo Algoritmos</strong>
            <span>Aditya Bhargava</span>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              quas pariatur inventore modi aliquam quo dicta molestiae harum eos
              soluta nostrum expedita sunt optio, perferendis fugit animi
              consequatur perspiciatis similique?
            </p>
          </MainInfo>
        </LastReadBookDetails>
      </LastReadCard>
    </LastReadContainer>
  )
}
