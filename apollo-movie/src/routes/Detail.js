import { gql } from "@apollo/client"
import React from "react"
import { useParams } from "react-router-dom"
import { useQuery } from '@apollo/client'

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      language
      description_intro
      medium_cover_image
    }
  }
`

export default () => {
  const id = Number(useParams().id)
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });

  if (loading) {
    return "loading"
  }
  if (data && data.movie) {
    return data.movie.title;
  }
}
