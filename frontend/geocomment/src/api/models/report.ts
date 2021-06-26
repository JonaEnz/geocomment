/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { newReport } from './newReport';

export type report = (newReport & {
id: number,
handled?: boolean,
});