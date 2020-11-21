//#region Imports

import { Injectable } from '@angular/core';
import { ChatInteractor } from '../../interactors/chat/chat.interactor';
import { ChatPayload } from '../../models/payloads/chat.payload';
import { ChatProxy } from '../../models/proxies/chat.proxy';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  //#region Constructors

  constructor(
    private readonly chatInteractor: ChatInteractor,
  ) {}

  //#endregion

  //#region Functions

  /**
   * Método para criar um chat
   */
  public async createChat(payload: ChatPayload): Promise<boolean> {
    const { error } = await this.chatInteractor.createChat(payload);

    return !error;
  }

  /**
   * Método para receber os chats daquele usuário
   */
  public async getUserChats(query: string): Promise<ChatProxy[]> {
    const { error, success } = await this.chatInteractor.getUserChats(query);

    if (error)
      return;

    // @ts-ignore
    return success.data;
  }

  //#endregion

}
