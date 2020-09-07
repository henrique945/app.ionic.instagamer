//#region  Imports

import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
import { LoadingOptions, ToastOptions } from '@ionic/core';

//#endregion

@Injectable({
  providedIn: 'root',
})
/**
 * A classe que representa o serviço que contém algumas funcionalidades padrões
 */
export class HelperService {

  //#region  Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly toast: ToastController,
    private readonly network: Network,
    private readonly loading: LoadingController,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que exibe uma mensagem toast na tela
   *
   * @param message As informações da mensagem
   * @param duration A duração da mensagem
   * @param options As opções do toast
   */
  public async showToast(message: string, duration: number = 5000, options?: ToastOptions): Promise<void> {
    const overlay = await this.toast.create({
      message,
      duration,
      ...!!options && { ...options },
    });

    await overlay.present();
  }

  /**
   * Método que verifica se o usuário está offline
   */
  public isOffline(): boolean {
    return [this.network.Connection.NONE, this.network.Connection.UNKNOWN].includes(this.network.type);
  }

  /**
   * Método que exibe o componente de loading e retorna a referência para dissipa-lo depois
   *
   * @param options As opções para o loading
   */
  public async getLoadingPresented(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    return await this.loading.create({ cssClass: 'loading--rounded', ...options }).then(async loading => {
      await loading.present();

      setTimeout(() => loading.dismiss(), 10000);

      return loading;
    });
  }

  //#endregion

}
