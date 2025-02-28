import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// server setup

const server = new ApolloServer({
    // takes 2 arguments

    // typedefinations

    // resolvers
})

const {url} = await startStandaloneServer( server , {
    listen: {port: 4000}
})

console.log('Server listening at port ' , 4000)