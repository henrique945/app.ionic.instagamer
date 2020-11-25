import { Component, OnInit } from '@angular/core';
import { UserProxy } from '../../models/proxies/user.proxy';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private readonly userService: UserService,
  ) { }

  /**
   * As informações do usuário
   */
  public user: UserProxy = {
    name: '',
    email: '',
    description: '',
    cpf: '',
  };

  public async ngOnInit(): Promise<void> {
    this.user = await this.userService.getMe();

    // let messageBox = document.querySelector('.js-message');
    const btn = document.querySelector('.js-message-btn');
    const card = document.querySelector('.js-profile-card');
    const closeBtn = document.querySelectorAll('.js-message-close');

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      card.classList.add('active');
    });

    closeBtn.forEach(function (element, index) {
      console.log(element);
      element.addEventListener('click', function (e) {
        e.preventDefault();
        card.classList.remove('active');
      });
    });
  }
}
