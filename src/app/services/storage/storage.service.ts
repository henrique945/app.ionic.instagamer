//#region  Imports

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

//#endregion

@Injectable({
  providedIn: 'root',
})
/**
 * A classe que representa o serviço que lida com o storage
 */
export class StorageService {

  //#region  Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly storage: Storage,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que salva um item no storage
   *
   * @param key A chave para acessar o item
   * @param item O item em sí
   */
  public async setItem<T>(key: string, item: T): Promise<StorageAsyncResult<T>> {
    const ready = await this.storage.ready().catch(() => 'READY_ERROR');

    if (ready === 'READY_ERROR')
      return this.onError();

    const onSuccess: () => StorageAsyncResult<T> = () => ({ success: item });

    return this.storage.set(key, item)
      .then(onSuccess)
      .catch(e => this.onError(e));
  }

  /**
   * Método que obtém um item no storage
   *
   * @param key A chave para acessar o item
   */
  public async getItem<T>(key: string): Promise<StorageAsyncResult<T>> {
    const ready = await this.storage.ready().catch(() => 'READY_ERROR');

    if (ready === 'READY_ERROR')
      return this.onError();

    const onSuccess: (item: T) => StorageAsyncResult<T> = (item: T) => ({ success: item });

    return this.storage.get(key)
      .then(onSuccess)
      .catch(e => this.onError(e));
  }

  /**
   * Método que remove um item no storage
   *
   * @param key A chave para acessar o item
   */
  public async remove(key: string): Promise<StorageAsyncResult<boolean>> {
    const ready = await this.storage.ready().catch(() => 'READY_ERROR');

    if (ready === 'READY_ERROR')
      return this.onError();

    const onSuccess: () => StorageAsyncResult<boolean> = () => ({ success: true });

    return this.storage.remove(key)
      .then(onSuccess)
      .catch(e => this.onError(e));
  }


  /**
   * Método que limpa o storage
   */
  public async clear(): Promise<StorageAsyncResult<boolean>> {
    const ready = await this.storage.ready().catch(() => 'READY_ERROR');

    if (ready === 'READY_ERROR')
      return this.onError();

    const onSuccess: () => StorageAsyncResult<boolean> = () => ({ success: true });

    return this.storage.clear()
      .then(onSuccess)
      .catch(e => this.onError(e));
  }

  //#endregion

  //#region Private Methods

  /**
   * Método que trata as exceções lançadas
   *
   * @param error O objeto que retorna as informações do erro
   */
  private onError<T>(error?: Error): StorageAsyncResult<T> {
    if (error && error.message)
      console.error(error && error.message);

    return <StorageAsyncResult<T>>{ error: { message: 'Ocorreu um erro ao salvar as informações, por favor, tente novamente.' } };
  }

  //#endregion

}

//#region Interfaces

/**
 * A interface que representa um resultado obtido de forma assincrona
 */
export interface StorageAsyncResult<T> {

  /**
   * O resultado quando ocorre tudo certo
   */
  success?: T;

  /**
   * O resultado quando dá algum problema
   */
  error?: { message: string };

}

//#endregion
