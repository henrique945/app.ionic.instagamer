import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
