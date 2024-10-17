import { gql } from '@apollo/client'

export const GET_WATCHLIST = gql`
  query GetAllWatchlist {
    getAllWatchlist {
      id
      mal_id
      episodes
    }
  }
`
