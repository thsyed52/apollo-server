export const typedefinations = `#graphql

type Game {
    id: ID!
    title: String!
    platform: [String!]!
}
type Review {
    id: ID!
    rating: Int!
    content: String!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
}
type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
}
`;

// Query type is a must . Every GraphQL schema has to have it. Its job is to define 
// entry points in the graph and specific the return types of those entry points

// reviews: [Reviews]  = when user query reviews it gets list of reviews
// game: [Game] = list of game objects
// author: [Author] = list of authors