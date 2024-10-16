import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Watchlist } from './watchlist.entity'
import { WatchlistService } from './watchlist.service'
import { WatchlistResolver } from './watchlist.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([Watchlist])],
  providers: [WatchlistService, WatchlistResolver],
})
export class WatchlistModule {}
