//#region Imports

import { Injectable } from '@angular/core';
import { PostInteractor } from '../../interactors/post/post.interactor';
import { PostPayload } from '../../models/payloads/post.payload';
import { PostProxy } from '../../models/proxies/post.proxy';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class PostService {

  //#region Constructors

  constructor(
    private readonly postInteractor: PostInteractor,
  ) {}

  //#endregion

  //#region Functions

  /**
   * Método para buscar todos os posts
   */
  public async getAllPosts(): Promise<PostProxy[]> {
    const { error, success } = await this.postInteractor.getAllPosts();

    if (error)
      return;

    return success;
  }

  /**
   * Método para postar um post
   */
  public async createPost(payload: PostPayload): Promise<boolean> {
    const { error } = await this.postInteractor.createPost(payload);

    return !error;
  }

  //#endregion

}
