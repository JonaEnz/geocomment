/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { comment } from "../models/comment";
import type { login } from "../models/login";
import type { newComment } from "../models/newComment";
import type { newReport } from "../models/newReport";
import type { newThread } from "../models/newThread";
import type { register } from "../models/register";
import type { report } from "../models/report";
import type { thread } from "../models/thread";
import type { user } from "../models/user";
import { request as __request } from "../core/request";

export class Service {
  /**
   * Returns threads in a radius around the given position
   * @param lat
   * @param lng
   * @param radius
   * @returns thread OK
   * @throws ApiError
   */
  public static async getThreadsAt(
    lat: number,
    lng: number,
    radius: number
  ): Promise<Array<thread>> {
    const result = await __request({
      method: "GET",
      path: `/threads`,
      query: {
        lat: lat,
        lng: lng,
        radius: radius,
      },
    });
    return result.body;
  }

  /**
   * Returns thread with given id
   * @param threadId
   * @returns thread OK
   * @throws ApiError
   */
  public static async getThread(threadId: number): Promise<thread> {
    const result = await __request({
      method: "GET",
      path: `/thread/${threadId}`,
      errors: {
        401: `unauthorized`,
        404: `not found`,
      },
    });
    return result.body;
  }

  /**
   * Create new thread
   * @param requestBody
   * @returns thread OK
   * @throws ApiError
   */
  public static async createThread(requestBody?: newThread): Promise<thread> {
    const result = await __request({
      method: "POST",
      path: `/thread/`,
      body: requestBody,
      errors: {
        401: `unauthorized`,
      },
    });
    return result.body;
  }

  /**
   * Get comments in thread
   * @param threadId
   * @param levels Maximum level of subcomments
   * @returns comment OK
   * @throws ApiError
   */
  public static async getThreadComments(
    threadId: number,
    levels?: number
  ): Promise<Array<comment>> {
    const result = await __request({
      method: "GET",
      path: `/thread/${threadId}/comments`,
      query: {
        levels: levels,
      },
    });
    return result.body;
  }

  /**
   * Create new top level comment
   * @param threadId
   * @param requestBody
   * @returns comment OK
   * @returns any failure
   * @throws ApiError
   */
  public static async postComment(
    threadId: number,
    requestBody?: newComment
  ): Promise<comment | any> {
    const result = await __request({
      method: "POST",
      path: `/thread/${threadId}/comments`,
      body: requestBody,
    });
    return result.body;
  }

  /**
   * Get single comment
   * @param threadId
   * @param commentId
   * @returns comment OK
   * @throws ApiError
   */
  public static async getComment(
    threadId: number,
    commentId: number
  ): Promise<comment> {
    const result = await __request({
      method: "GET",
      path: `/thread/${threadId}/comments/${commentId}`,
      errors: {
        401: `unauthorized`,
      },
    });
    return result.body;
  }

  /**
   * Submit vote on comment (or 0 for thread)
   * @param threadId
   * @param commentId
   * @param vote true for upvote, flase for downvote
   * @returns any OK
   * @throws ApiError
   */
  public static async vote(
    threadId: number,
    commentId: number,
    vote: boolean
  ): Promise<any> {
    const result = await __request({
      method: "POST",
      path: `/thread/${threadId}/comments/${commentId}/vote`,
      query: {
        vote: vote,
      },
    });
    return result.body;
  }

  /**
   * Delete own comment
   * @param threadId
   * @param commentId
   * @returns any OK
   * @throws ApiError
   */
  public static async deleteComment(
    threadId: number,
    commentId: number
  ): Promise<any> {
    const result = await __request({
      method: "POST",
      path: `/thread/${threadId}/comments/${commentId}/delete`,
      errors: {
        401: `unauthorized`,
      },
    });
    return result.body;
  }

  /**
   * Report comment to admins
   * @param threadId
   * @param commentId
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static async reportComment(
    threadId: number,
    commentId: number,
    requestBody?: newReport
  ): Promise<any> {
    const result = await __request({
      method: "POST",
      path: `/thread/${threadId}/comments/${commentId}/report`,
      body: requestBody,
    });
    return result.body;
  }

  /**
   * Get subcomments for this comment
   * @param threadId
   * @param commentId
   * @param level Maximum level of subcomments
   * @returns comment OK
   * @throws ApiError
   */
  public static async getChildComments(
    threadId: number,
    commentId: number,
    level?: number
  ): Promise<Array<comment>> {
    const result = await __request({
      method: "GET",
      path: `/thread/${threadId}/comments/${commentId}/children`,
      query: {
        level: level,
      },
      errors: {
        404: `not found`,
      },
    });
    return result.body;
  }

  /**
   * Get information about a user
   * @param userId
   * @returns user OK
   * @throws ApiError
   */
  public static async getUser(userId: number): Promise<user> {
    const result = await __request({
      method: "GET",
      path: `/user/${userId}`,
      errors: {
        401: `unauthorized`,
      },
    });
    return result.body;
  }

  /**
   * Get last comments by a user
   * @param userId
   * @param top
   * @returns any OK
   * @throws ApiError
   */
  public static async getUserComments(
    userId: number,
    top?: number
  ): Promise<
    Array<
      comment & {
        thread?: thread;
      }
    >
  > {
    const result = await __request({
      method: "GET",
      path: `/user/${userId}/comments`,
      query: {
        top: top,
      },
    });
    return result.body;
  }

  /**
   * Get own comments
   * @param top
   * @returns any OK
   * @throws ApiError
   */
  public static async getMyComments(top?: number): Promise<
    Array<
      comment & {
        thread?: thread;
      }
    >
  > {
    const result = await __request({
      method: "GET",
      path: `/user/me/comments`,
      query: {
        top: top,
      },
    });
    return result.body;
  }

  /**
   * Get reports (only unhandled by default)
   * @param all
   * @returns report OK
   * @throws ApiError
   */
  public static async getReports(all?: boolean): Promise<Array<report>> {
    const result = await __request({
      method: "GET",
      path: `/admin/reports`,
      query: {
        all: all,
      },
    });
    return result.body;
  }

  /**
   * Handle report
   * @param reportId
   * @param action decision for report
   * @returns any OK
   * @throws ApiError
   */
  public static async handleReport(
    reportId: number,
    action: "ban" | "ignore"
  ): Promise<any> {
    const result = await __request({
      method: "POST",
      path: `/admin/reports/${reportId}`,
      query: {
        action: action,
      },
      errors: {
        401: `unauthorized`,
        404: `not found`,
      },
    });
    return result.body;
  }

  /**
   * Ban user for a specific time
   * @param userId
   * @param time Time in seconds, 0 = infinite
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static async banUser(
    userId: number,
    time: number,
    requestBody?: any
  ): Promise<any> {
    const result = await __request({
      method: "POST",
      path: `/admin/ban/${userId}`,
      query: {
        time: time,
      },
      body: requestBody,
      errors: {
        401: `unauthorized`,
      },
    });
    return result.body;
  }

  /**
   * login with email address and password
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static async login(requestBody?: login): Promise<any> {
    const result = await __request({
      method: "POST",
      path: `/login`,
      body: requestBody,
    });
    return result.body;
  }

  /**
   * create a new account
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static async register(requestBody?: register): Promise<user> {
    const result = await __request({
      method: "POST",
      path: `/register`,
      body: requestBody,
    });
    return result.body;
  }

  /**
   * upload a new image with a commentId  (0 = thread) and threadId
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static async uploadImage(requestBody?: any): Promise<any> {
    const result = await __request({
      method: "POST",
      path: `/images/upload`,
      body: requestBody,
    });
    return result.body;
  }
}
