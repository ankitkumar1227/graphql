import { gql } from "apollo-angular";

const GET_TODOS = gql`
    query GetAllTodos {
        getTodos {
            title
            user {
                name
              }
        }
    }
`

export { GET_TODOS };