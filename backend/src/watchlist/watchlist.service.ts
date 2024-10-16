import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Watchlist } from './watchlist.entity'
import { Repository } from 'typeorm'

@Injectable()
export class WatchlistService {
  constructor(
    @InjectRepository(Watchlist)
    private readonly watchlistRepository: Repository<Watchlist>
  ) {}

  async findAll(): Promise<Watchlist[]> {
    return this.watchlistRepository.find()
  }
}
