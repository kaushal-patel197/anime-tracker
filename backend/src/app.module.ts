import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WatchlistModule } from './watchlist/watchlist.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Watchlist } from './watchlist/watchlist.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Move to .env file
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'artemis',
      password: '',
      database: 'anime-tracker',
      entities: [Watchlist], // Automatically load entities
      synchronize: true, // Auto sync the schema (disable in production)
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    WatchlistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
