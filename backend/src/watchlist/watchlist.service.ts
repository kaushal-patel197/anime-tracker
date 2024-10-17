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

  async findOne(id: number): Promise<Watchlist> {
    return this.watchlistRepository.findOneBy({ id })
  }

  async create(watchlistEntity: Partial<Watchlist>): Promise<Watchlist> {
    return this.watchlistRepository.save(watchlistEntity)
  }

  async remove(id: number): Promise<void> {
    const deletedEntity = await this.watchlistRepository.delete(id)
    console.log(`Entity Deletd with id ${deletedEntity.affected}`)
  }
}
