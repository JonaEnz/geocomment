/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type user = {
  id: number;
  banned?: boolean;
  /**
   * Banned until (0 = infinite)
   */
  banUntil?: string;
  private?: boolean;
  admin?: boolean;
  joined_at?: string;
};
