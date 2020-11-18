//#region Imports

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ChatPayload } from '../../models/payloads/chat.payload';
import { ChatProxy } from '../../models/proxies/chat.proxy';
import { AsyncResult, HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class ChatInteractor {

  //#region Constructors

  constructor(
    private readonly http: HttpAsyncService,
  ) {}

  //#endregion

  //#region Functions

  /**
   * Método para criar um chat
   */
  public async createChat(payload: ChatPayload): Promise<AsyncResult<ChatPayload>> {
    return await this.http.post<ChatPayload>(environment.routes.chat, payload);
  }

  /**
   * Método para receber os chats daquele usuário
   */
  public async getUserChats(query: string): Promise<AsyncResult<ChatProxy[]>> {
    return await this.http.get<ChatProxy[]>(`${environment.routes.chat}?${query}`);
  }

  //#endregion

}
