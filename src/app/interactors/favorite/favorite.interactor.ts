import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FavoriteProxy } from '../../models/proxies/favorite.proxy';
import { AsyncResult, HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteInteractor {

  //#region Constructors

  constructor(
    private readonly http: HttpAsyncService,
  ) {
  }

  //#endregion

  //#region Functions

  /**
   * Método para favoritar um post
   */
  public async favoritePost(payload: FavoriteProxy): Promise<AsyncResult<FavoriteProxy>> {
    return await this.http.post<FavoriteProxy>(environment.routes.favorite, payload);
  }

  //#endregion

}
