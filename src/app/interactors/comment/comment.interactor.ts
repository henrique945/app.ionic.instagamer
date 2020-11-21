import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommentProxy } from '../../models/proxies/comment.proxy';
import { AsyncResult, HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';

@Injectable({
  providedIn: 'root',
})
export class CommentInteractor {

  //#region Constructors

  constructor(
    private readonly http: HttpAsyncService,
  ) {
  }

  //#endregion

  //#region Functions

  /**
   * Método para criar um comentário
   */
  public async createComment(payload: CommentProxy): Promise<AsyncResult<CommentProxy>> {
    return await this.http.post<CommentProxy>(environment.routes.comment, payload);
  }

  //#endregion

}
