//#region Imports

import { Injectable } from '@angular/core';
import { GameInteractor } from '../../interactors/game/game.interactor';
import { UserGamePayload } from '../../models/payloads/user-game.payload';
import { GameProxy } from '../../models/proxies/game.proxy';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class GameService {

  //#region Constructors

  constructor(
    private readonly gameInteractor: GameInteractor,
  ) {}

  //#endregion

  //#region Functions

  /**
   * Método que busca a lista de jogos do usuário
   */
  public async userListGames(): Promise<GameProxy[]> {
    const { error, success } = await this.gameInteractor.userListGames();

    if (error)
      return;

    return success;
  }

  /**
   * Método para listar todos os jogos disponiveis
   */
  public async listAllGames(): Promise<GameProxy[]> {
    const { error, success } = await this.gameInteractor.listAllGames();

    if (error)
      return;

    return success;
  }

  /**
   * Método para um usuário seguir um jogo
   */
  public async userFollowGame(payload: UserGamePayload): Promise<boolean> {
    const { error } = await this.gameInteractor.userFollowGame(payload);

    return !error;
  }

  //#endregion

}
