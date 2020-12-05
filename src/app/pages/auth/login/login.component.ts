//#region Imports

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

//#endregion

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  //#region Constructors

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) { }

  //#endregion

  //#region Functions

  /**
   * Method for logging into the site
   */
  public async onSubmit(f: NgForm): Promise<void> {
    const approved = await this.userService.postLogin(f.value);

    if (approved) {
      $('#myModal').modal('show');
    } else {
      document.getElementById('loginForm').style.height = '415px';
      $('#alertLogin').removeClass('collapse');
      $('#alertLogin').addClass('show');
    }
  }

  /**
   * Method to close the invalid login alert
   */
  public closeAlert() {
    $('#alertLogin').removeClass('show');
    $('#alertLogin').addClass('collapse');
    document.getElementById('loginForm').style.height = '350px';
  }

  //#endregion

}
