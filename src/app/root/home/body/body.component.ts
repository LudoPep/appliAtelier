import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { DataGlobalService } from 'src/app/data-global.service';
import { Player } from '../../players/player';
import { PlayersService } from '../../players/players.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public players: any;
  public search: string = "";
  public playersResult: Player[] = [];

  constructor(
    private _playersService: PlayersService,
    private dataGlobal: DataGlobalService
    ) { 
  }
  
  ngOnInit(): void {
    this.players = [];
    // Chargement des data, retourne les données triées par ordre alphabétique sur le prénom
    this._playersService.getPlayers()
      .subscribe(
        (datas: any) => {
          this.players = datas.players;
          return this.playersResult = this.players.sort((a : Player, b : Player) =>
            b.firstname.toLocaleLowerCase() < a.firstname.toLocaleLowerCase() ? 1:-1
          );
        })
  }

  // Méthode pour rechercher un joueur via la barre de recherche
  searchMethod() : void {
    if(this.search === "") {
      this.playersResult = this.players;
    }
    this.playersResult = this.players.filter((player: Player) => {
      return player.lastname.toLocaleLowerCase().includes(
        this.search.toLocaleLowerCase()
      ) || player.firstname.toLocaleLowerCase().includes(
        this.search.toLocaleLowerCase()
      )
    })
  }

}
