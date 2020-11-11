//#region Imports

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';

//#endregion

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  //#region Constructors

  constructor(
    private readonly userService: UserService,
  ) { }

  //#endregion

  //#region Functions

  /**
   * Método para logar no site
   */
  public async onSubmit(f: NgForm): Promise<void> {
    await this.userService.postLogin(f.value);
  }

  //#endregion

}
