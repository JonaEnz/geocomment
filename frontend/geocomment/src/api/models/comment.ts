/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { newComment } from './newComment';

export type comment = (newComment & {
id: number,
votes: number,
created_at?: number,
});