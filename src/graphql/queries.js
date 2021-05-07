/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReact = /* GraphQL */ `
  query GetReact($id: ID!) {
    getReact(id: $id) {
      id
      name
      description
      filePath
      like
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listReacts = /* GraphQL */ `
  query ListReacts(
    $filter: ModelReactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        filePath
        like
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
