//#region Imports

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PostPayload } from '../../models/payloads/post.payload';
import { PostProxy } from '../../models/proxies/post.proxy';
import { AsyncResult, HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class PostInteractor {

  //#region Constructors

  constructor(
    private readonly http: HttpAsyncService,
  ) {}

  //#endregion

  //#region Functions

  /**
   * Método para buscar todos os posts
   */
  public async getAllPosts(): Promise<AsyncResult<PostProxy[]>> {
    return await this.http.get<PostProxy[]>(`${environment.routes.post}?join=game`);
  }

  /**
   * Método para postar um post
   */
  public async createPost(payload: PostPayload): Promise<AsyncResult<PostPayload>> {
    return await this.http.post<PostPayload>(environment.routes.post, payload);
  }

  //#endregion

}
