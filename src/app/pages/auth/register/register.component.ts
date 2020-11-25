//#region Imports

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

//#endregion

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  //#region Constructors

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) { }

  //#endregion

  //#region Functions

  /**
   * Método para registrar o usuário
   */
  public async onSubmit(f: NgForm): Promise<void> {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    const result = await this.userService.postUser(f.value);

    if (result)
      await this.router.navigateByUrl('/auth/login');
  }

  //#endregion

}
