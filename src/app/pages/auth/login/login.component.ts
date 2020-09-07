//#region Imports

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginPayload } from '../../../models/payloads/login.payload';
import { UserService } from '../../../services/user/user.service';

//#endregion

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //#region Constructors

  constructor(
    private readonly userService: UserService,
  ) { }

  //#endregion

  //#region Properties

  /**
   * O objeto que salva as informações de login do usuário
   */
  public login: LoginPayload = {
    username: '',
    password: '',
  };

  //#endregion

  //#region Functions

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  /**
   * Método para logar no site
   */
  public async authUser(): Promise<void> {
    // TODO: criar NgModel é mais segura que utilizar tudo por id, e também usar id não é uma prática tão boa
    // NgModel se criar um objeto e associa no html
    // ou usando forms do angular mas sem id tbm
    await this.userService.postLogin(this.login);
  }

  //#endregion

}
