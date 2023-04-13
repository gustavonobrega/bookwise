import { Skeleton } from '../Skeleton'
import {
  SidebarShimmerContainer,
  SidebarShimmerHeader,
  SidebarShimmerNav,
} from './styles'

export function SidebarShimmer() {
  return (
    <SidebarShimmerContainer>
      <SidebarShimmerHeader>
        <Skeleton className="image" />
        <Skeleton className="title">BookWise</Skeleton>
      </SidebarShimmerHeader>

      <SidebarShimmerNav>
        <li>
          <Skeleton className="item-svg" />
          <Skeleton className="item-title" />
        </li>
        <li>
          <Skeleton className="item-svg" />
          <Skeleton className="item-title" />
        </li>
        <li>
          <Skeleton className="item-svg" />
          <Skeleton className="item-title" />
        </li>
      </SidebarShimmerNav>
    </SidebarShimmerContainer>
  )
}
