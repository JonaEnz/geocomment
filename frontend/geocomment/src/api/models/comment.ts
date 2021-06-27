/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { newComment } from "./newComment";

export type comment = newComment & {
  id: number;
  upvotes: number;
  downvotes: number;
  myvote?: comment.myvote;
  created_at?: string;
};

export namespace comment {
  export enum myvote {
    NONE = "none",
    DOWNVOTE = "downvote",
    UPVOTE = "upvote",
  }
}
