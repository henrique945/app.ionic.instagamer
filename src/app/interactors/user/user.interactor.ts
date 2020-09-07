//#region Imports

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginPayload } from '../../models/payloads/login.payload';
import { LoginProxy } from '../../models/proxies/token.proxy';
import { AsyncResult, HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class UserInteractor {

  //#region Constructors

  constructor(
    private readonly http: HttpAsyncService,
  ) {}

  //#endregion

  //#region Functions

  /**
   * Método para o usuário logar no site
   */
  public async postLogin(payload: LoginPayload): Promise<AsyncResult<LoginProxy>> {
    return await this.http.post<LoginProxy>(environment.routes.auth, payload);
  }

  //#endregion
}
