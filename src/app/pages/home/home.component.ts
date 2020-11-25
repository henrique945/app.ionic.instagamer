import { Component, OnInit } from '@angular/core';
import { GameProxy } from '../../models/proxies/game.proxy';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly gameService: GameService,
  ) { }

  /**
   * A lista de jogos do usuário
   */
  public listGames: GameProxy[] = [];

  public async ngOnInit(): Promise<void> {
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
