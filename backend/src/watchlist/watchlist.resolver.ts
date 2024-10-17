import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Watchlist } from './watchlist.entity'
import { WatchlistService } from './watchlist.service'

@Resolver(() => Watchlist)
export class WatchlistResolver {
  constructor(private readonly watchlistService: WatchlistService) {}

  @Query(() => [Watchlist])
  async getAllWatchlist() {
    return this.watchlistService.findAll()
  }

  @Query(() => Watchlist)
  async getWatchlistById(@Args('id', { type: () => Int }) id: number) {
    return this.watchlistService.findOne(id)
  }

  @Mutation(() => Watchlist)
  async createWatchlist(
    @Args('mal_id', { type: () => Int }) mal_id: number,
    @Args('title') title: string
  ) {
    return this.watchlistService.create({ mal_id, title })
  }

  @Mutation(() => Boolean)
  async deleteWatchlist(@Args('id', { type: () => Int }) id: number) {
    await this.watchlistService.remove(id)
    return true
  }
}
