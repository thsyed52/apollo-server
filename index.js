import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typedefinations } from './schema';


// server setup

const server = new ApolloServer({
    // takes 2 arguments
    typedefinations,
    // typedefinations = definations of type of data which the user can query like schema

    // resolvers = how to solve the queries done on schema / typedefinations
})

const {url} = await startStandaloneServer( server , {
    listen: {port: 4000}
})

console.log('Server listening at port ' , 4000)