# GraphQL server on Node.js apps
We will use Apollo Server which is compatible with any GraphQL client, including Apollo Client.It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.

## Process to create graphQL server and start development

1. Create a new project ( npm init --yes && npm pkg set type="module" ).
2. Install dependencies ( npm install @apollo/server graphql ).
3. Define your GraphQL schema ( Here, we have created schema inside index.js). Every GraphQL server (including Apollo Server) uses a schema to define the structure of data that clients can query
4. Define your data set. Apollo Server can fetch data from any source you connect to (including a database, a REST API, a static object storage service, or even another GraphQL server).
5. Define a resolver. Resolvers tell Apollo Server how to fetch the data associated with a particular type.

   resolvers: {
        Query: {
            getTodos: () => TODOS,
            getAllUsers: () => USERS,
            getUser: async (parent, { id }) => USERS.find((e) => e.id === id),
        },
   }

6. Create an instance of ApolloServer. We've defined our schema, data set, and resolver. Now we need to provide this information to Apollo Server when we initialize it.

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    app.use("/graphql", expressMiddleware(server));

    app.listen(8000, () => console.log("Serevr Started at PORT 8000"));

7. Start the server using 'npm start' which will start the server
8. Execute your first query. Visit http://localhost:8000/graphql in your browser, which will open the Apollo Sandbox where you can execute the query.


Note: Follow https://www.apollographql.com/docs/apollo-server/getting-started for more info.