//#region Imports

import { Component } from '@angular/core';
import { Router } from '@angular/router';

//#endregion

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  //#region Constructors

  constructor(
    private readonly router: Router,
  ) { }

  //#endregion

  //#region Functions

  /**
   * Método para ir para home e fechar a modal
   */
  public async goToHome(): Promise<void> {
    await this.router.navigateByUrl('/home');
  }

  //#endregion

}
