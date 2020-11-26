//#region Imports

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UserProxy } from '../../models/proxies/user.proxy';
import { StorageService } from '../../services/storage/storage.service';
import { UserService } from '../../services/user/user.service';

//#endregion

declare var $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  //#region Constructors

  constructor(
    private readonly userService: UserService,
    private readonly storage: StorageService,
    private readonly router: Router,
  ) { }

  //#endregion

  //#region Properties

  /**
   * As informações do usuário
   */
  public user: UserProxy = {
    name: '',
    email: '',
    description: '',
    cpf: '',
  };

  //#endregion

  //#region Functions

  public async ngOnInit(): Promise<void> {
    // user logged
    const { success: user } = await this.storage.getItem(environment.keys.token);
    if (!user)
      await this.router.navigateByUrl('/auth/login');

    this.user = await this.userService.getMe();
  }

  /**
   * Método para da logout
   */
  public async performLogout(): Promise<void> {
    await this.storage.clear();
    await this.router.navigateByUrl('/auth/login');
  }

  /**
   * Edit Profile
   */
  public async editProfile(): Promise<void> {
    $('#myModal').modal('show');
  }

  //#endregion

}
