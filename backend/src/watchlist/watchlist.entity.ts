import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
@ObjectType()
export class Watchlist {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => Int)
  @Column()
  mal_id: number

  @Field()
  @Column()
  title: string

  @Field(() => Int)
  @Column({ default: 0 })
  episodes: number
}
