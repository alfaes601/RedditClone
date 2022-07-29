import { gql } from "@apollo/client";

export const ADD_POST = gql`
    mutation MyMutation(
        $image: String!
        $body: String!
        $subreddit_id: ID!
        $title: String!
        $username: String!
    ) {
        image: $image
        body: $body
        subreddit_id: $subreddit_id
        title: $title
        username: $username
    } {
        body
        created_at
        id
        image
        subreddit_id
        title
        username
    }
`