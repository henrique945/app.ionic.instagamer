import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { GameProxy } from '../../models/proxies/game.proxy';
import { GameService } from '../../services/game/game.service';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly gameService: GameService,
    private readonly storage: StorageService,
    private readonly router: Router,
  ) {}

  /**
   * A lista de jogos do usuário
   */
  public listGames: GameProxy[] = [];

  public async ngOnInit(): Promise<void> {
    // user logged
    const { success: user } = await this.storage.getItem(environment.keys.token);
    if (!user)
      await this.router.navigateByUrl('/auth/login');

    const textarea = document.querySelector('textarea');

    textarea.addEventListener('keydown', autosize);

    function autosize() {
      const el = this;
      setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      }, 0);
    }

    this.listGames = await this.gameService.userListGames();
  }
}
