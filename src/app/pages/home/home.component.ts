//#region Imports

import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { GameProxy } from '../../models/proxies/game.proxy';
import { PostProxy } from '../../models/proxies/post.proxy';
import { UserProxy } from '../../models/proxies/user.proxy';
import { GameService } from '../../services/game/game.service';
import { PostService } from '../../services/post/post.service';
import { StorageService } from '../../services/storage/storage.service';
import { UserService } from '../../services/user/user.service';

//#endregion

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  //#region Constructors

  constructor(
    private readonly gameService: GameService,
    private readonly userService: UserService,
    private readonly postService: PostService,
    private readonly storage: StorageService,
    private readonly router: Router,
  ) {}

  //#endregion

  //#region Properties

  /**
   * As informações do usuário
   */
  public user: UserProxy = {
    id: 0,
    email: '',
    description: '',
    cpf: '',
    name: '',
  };

  /**
   * A lista de jogos do usuário
   */
  public listGames: GameProxy[] = [];

  /**
   * As informações para realizar um post
   */
  public post: PostProxy = {
    gameId: 0,
    userId: 0,
    imageUrl: '',
    whoName: '',
    whoDescription: '',
  };

  /**
   * A lista de posts
   */
  public listPost: PostProxy[] = [];

  /**
   * As informações do usuário do post
   */
  public userPost: UserProxy = {
    id: 0,
    email: '',
    description: '',
    cpf: '',
    name: '',
  };

  //#endregion

  //#region Functions

  public async ngOnInit(): Promise<void> {
    // user logged
    const { success: user } = await this.storage.getItem(environment.keys.token);
    if (!user)
      await this.router.navigateByUrl('/auth/login');

    // user info
    this.user = await this.userService.getMe();

    // listPost
    this.listPost = await this.postService.getAllPosts();

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

  /**
   * Método para criar um post
   */
  public async createPost(): Promise<void> {
    this.post.whoName = this.user.name;
    this.post.userId = +this.user.id;
    this.post.gameId = +this.post.gameId;
    await this.postService.createPost(this.post);

    this.post.whoDescription = '';
    this.post.imageUrl = '';
    this.post.gameId = 0;

    // listPost
    this.listPost = await this.postService.getAllPosts();
  }

  /**
   * Método para pegar User post
  */
  public async getUserPost(id: number): Promise<void> {
    this.userPost.name = this.user.name;
  }

  //#endregion

}
