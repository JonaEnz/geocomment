/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type newComment = {
    parentId: number;
    /**
     * if anonymous a number unique to a user in a thread, else the userid
     */
    authorId?: number;
    anonymous?: boolean;
    content: string;
}