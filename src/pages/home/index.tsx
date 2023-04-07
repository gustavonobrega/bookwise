import { LastRead } from './LastRead'
import { RecentReviews } from './RecentReviews'
import { HomeContainer, MyBooks } from './styles'
import { TrendingBooks } from './TrendingBooks'

export default function Home() {
  const isSignedIn = false

  return (
    <HomeContainer>
      <MyBooks>
        {isSignedIn && <LastRead />}
        <RecentReviews />
      </MyBooks>

      <TrendingBooks />
    </HomeContainer>
  )
}
