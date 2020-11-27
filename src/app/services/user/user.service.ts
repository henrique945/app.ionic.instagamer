//#region Imports

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserInteractor } from '../../interactors/user/user.interactor';
import { LoginPayload } from '../../models/payloads/login.payload';
import { RegisterPayload } from '../../models/payloads/register.payload';
import { UserProxy } from '../../models/proxies/user.proxy';
import { StorageService } from '../storage/storage.service';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class UserService {

  //#region Constructors

  constructor(
    private readonly userInteractor: UserInteractor,
    private readonly storage: StorageService,
  ) { }

  //#endregion

  //#region Functions

  /**
   * Método para buscar informações do meu usuário
   */
  public async getMe(): Promise<UserProxy> {
    const { error, success } = await this.userInteractor.getMe();

    if (error)
      return;

    await this.storage.setItem(environment.keys.userInfo, success);
    return success;
  }

  /**
   * Método para buscar informações de um usuário pelo id
   */
  public async getUserById(id: number): Promise<UserProxy> {
    const { error, success } = await this.userInteractor.getUserById(id);

    if (error)
      return;

    return success;
  }

  /**
   * Método para o usuário logar no site
   */
  public async postLogin(payload: LoginPayload): Promise<boolean> {
    const { error, success } = await this.userInteractor.postLogin(payload);

    if (error) {
      // TODO: tratar o erro (modal controlle de error)
      return false;
    }

    await this.storage.setItem(environment.keys.token, success.token);
    return true;
  }

  /**
   * Método para criar um usuário
   */
  public async postUser(payload: RegisterPayload): Promise<boolean> {
    payload.cpf = '12345678980';
    const { error, success } = await this.userInteractor.postUser(payload);

    if (error)
      return false;

    return true;
  }

  //#endregion

}
