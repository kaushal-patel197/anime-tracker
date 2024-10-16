import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
@ObjectType()
export class Watchlist {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  mal_id: string

  @Field()
  @Column()
  title: string

  @Field(() => Int)
  @Column()
  episodes: number
}
