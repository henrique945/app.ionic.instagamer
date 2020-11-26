//#region Imports

import { CommentProxy } from './comment.proxy';
import { GameProxy } from './game.proxy';
import { UserProxy } from './user.proxy';

//#endregion

export interface PostProxy {

  imageUrl: string;
  userId: number;
  gameId: number;
  whoName: string;
  whoDescription: string;

  user?: UserProxy;
  game?: GameProxy;
  comments?: CommentProxy[];

}
