import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { ListPlayersComponent } from './list-players/list-players.component';
import { PlayerStickerComponent } from './list-players/player-sticker/player-sticker.component';

@NgModule({
  declarations: [
    ListPlayersComponent,
    PlayerStickerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListPlayersComponent
  ]
})
export class PlayersModule { }