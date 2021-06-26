/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { location } from './location';

export type newThread = {
    title?: string;
    description?: string;
    type?: string;
    /**
     * if anonymous a number unique to a user in a thread, else the userid
     */
    authorId?: number;
    anonymous?: boolean;
    location?: location;
}