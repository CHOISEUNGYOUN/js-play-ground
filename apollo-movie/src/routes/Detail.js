import { gql } from "@apollo/client"
import React from "react"
import { useParams } from "react-router-dom"
import { useQuery } from '@apollo/client'
import styled from "styled-components"

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      language
      rating
      description_intro
      medium_cover_image
    }
  }
`

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`

const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 15px;
`

const Subtitle = styled.h4`
  font-size: 24px;
  margin-bottom: 5px;
`

const Description = styled.p`
  font-size: 16px;
`

const Poster = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  width: 25%;
  height: 60%;
`

export default () => {
  const id = Number(useParams().id)
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });

  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        <Subtitle>{data?.movie?.language} · {data?.movie?.rating}</Subtitle>
        <Description>{data?.movie?.description_intro}</Description>
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
    </Container>
  )
}
