import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserGamePayload } from '../../models/payloads/user-game.payload';
import { GameProxy } from '../../models/proxies/game.proxy';
import { AsyncResult, HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';

@Injectable({
  providedIn: 'root',
})
export class GameInteractor {

  //#region Constructors

  constructor(
    private readonly http: HttpAsyncService,
  ) {}

  //#endregion

  //#region Functions

  /**
   * Método que busca a lista de jogos do usuário
   */
  public async userListGames(): Promise<AsyncResult<GameProxy[]>> {
    return await this.http.get<GameProxy[]>(environment.routes.listGames);
  }

  /**
   * Método para listar todos os jogos disponiveis
   */
  public async listAllGames(): Promise<AsyncResult<GameProxy[]>> {
    return await this.http.get(environment.routes.game);
  }

  /**
   * Método para um usuário seguir um jogo
   */
  public async userFollowGame(payload: UserGamePayload): Promise<AsyncResult<UserGamePayload>> {
    return await this.http.post<UserGamePayload>(environment.routes.userGame, payload);
  }

  //#endregion

}
