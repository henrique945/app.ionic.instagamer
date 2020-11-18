//#region Imports

import { Injectable } from '@angular/core';
import { CommentInteractor } from '../../interactors/comment/comment.interactor';
import { CommentProxy } from '../../models/proxies/comment.proxy';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  //#region Constructors

  constructor(
    private readonly commentInteractor: CommentInteractor,
  ) {}

  //#endregion

  //#region Functions

  /**
   * Método para criar um comentário
   */
  public async createComment(payload: CommentProxy): Promise<boolean> {
    const { error } = await this.commentInteractor.createComment(payload);

    return !error;
  }

  //#endregion

}
