/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReact = /* GraphQL */ `
  mutation CreateReact(
    $input: CreateReactInput!
    $condition: ModelReactConditionInput
  ) {
    createReact(input: $input, condition: $condition) {
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
export const updateReact = /* GraphQL */ `
  mutation UpdateReact(
    $input: UpdateReactInput!
    $condition: ModelReactConditionInput
  ) {
    updateReact(input: $input, condition: $condition) {
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
export const deleteReact = /* GraphQL */ `
  mutation DeleteReact(
    $input: DeleteReactInput!
    $condition: ModelReactConditionInput
  ) {
    deleteReact(input: $input, condition: $condition) {
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
