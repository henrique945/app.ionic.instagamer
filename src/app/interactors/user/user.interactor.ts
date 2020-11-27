//#region Imports

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginPayload } from '../../models/payloads/login.payload';
import { RegisterPayload } from '../../models/payloads/register.payload';
import { LoginProxy } from '../../models/proxies/token.proxy';
import { UserProxy } from '../../models/proxies/user.proxy';
import { AsyncResult, HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';

//#endregion
declare var $: any;
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
   * Método para buscar informações do meu usuário
   */
  public async getMe(): Promise<AsyncResult<UserProxy>> {
    return await this.http.get<UserProxy>(environment.routes.me);
  }

  /**
   * Método para buscar informações de um usuário pelo id
   */
  public async getUserById(id: number): Promise<AsyncResult<UserProxy>> {
    return await this.http.get<UserProxy>(`${environment.routes.user}/${id}`);
  }

  /**
   * Método para o usuário logar no site
   */
  public async postLogin(payload: LoginPayload): Promise<AsyncResult<LoginProxy>> {
    return await this.http.post<LoginProxy>(environment.routes.auth, payload);
  }

  /**
   * Método para criar um usuário
   */
  public async postUser(payload: RegisterPayload): Promise<AsyncResult<RegisterPayload>> {
    return await this.http.post<RegisterPayload>(environment.routes.user, payload);
  }

  //#endregion
}
