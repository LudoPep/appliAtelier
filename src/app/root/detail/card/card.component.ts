import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataGlobalService } from 'src/app/data-global.service';
import { Player } from '../../players/player';
import { PlayersService } from '../../players/players.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  
})
export class CardComponent implements OnInit {

  public player!: Player;
  public oldWeight!: number;
  public weight!: number;

  constructor(private router: Router, private dataGlobal: DataGlobalService) { 
   
  }

  ngOnInit(): void {
    this.player = this.dataGlobal.player;
    this.weight = this.player.data.weight/1000;
  }

  // Redirection vers la page Home
  backToHome() : void {
    this.router.navigate(['/Home']);
  }

}
