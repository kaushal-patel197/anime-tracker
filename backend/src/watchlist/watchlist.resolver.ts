import { Query, Resolver } from '@nestjs/graphql'
import { Watchlist } from './watchlist.entity'
import { WatchlistService } from './watchlist.service'

@Resolver(() => Watchlist)
export class WatchlistResolver {
  constructor(private readonly watchlistService: WatchlistService) {}

  @Query(() => [Watchlist])
  getAllWatchlist() {
    return this.watchlistService.findAll()
  }
}
