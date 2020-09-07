//#region Imports

import { Injectable } from '@angular/core';
import { UserInteractor } from '../../interactors/user/user.interactor';
import { LoginPayload } from '../../models/payloads/login.payload';
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
   * Método para o usuário logar no site
   */
  public async postLogin(payload: LoginPayload): Promise<void> {
    const { error, success } = await this.userInteractor.postLogin(payload);

    if (error) {
      // TODO: tratar o erro
      return;
    }

    // TODO: no sucesso salvar o token do usuário para as próximas requisões ele estiver logado
  }

  //#endregion

}
