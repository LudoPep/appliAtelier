import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss']
})
export class ListPlayersComponent implements OnInit {

  @Input() players!: Player[];

  constructor() { 
   
  }

  ngOnInit(): void {
    
  };


}
