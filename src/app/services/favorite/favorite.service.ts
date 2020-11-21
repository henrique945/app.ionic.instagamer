//#region Imports

import { Injectable } from '@angular/core';
import { FavoriteInteractor } from '../../interactors/favorite/favorite.interactor';
import { FavoriteProxy } from '../../models/proxies/favorite.proxy';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {

  //#region Constructors

  constructor(
    private readonly favoriteInteractor: FavoriteInteractor,
  ) {}

  //#endregion

  //#region Functions

  /**
   * Método para favoritar um post
   */
  public async favoritePost(payload: FavoriteProxy): Promise<boolean> {
    const { error } = await this.favoriteInteractor.favoritePost(payload);

    return !error;
  }

  //#endregion

}
