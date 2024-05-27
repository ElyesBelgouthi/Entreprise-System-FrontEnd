import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
      id
      content
      path
      createdAt
      author {
        id
        username
      }
      comments {
        id
        content
        author {
          id
          username
        }
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
      content
      post {
        id
      }
      createdAt
      author {
        id
        username
      }
    }
  }
`;
