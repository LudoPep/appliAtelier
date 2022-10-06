import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataGlobalService } from 'src/app/data-global.service';
import { Player } from '../../player';

@Component({
  selector: 'app-player-sticker',
  templateUrl: './player-sticker.component.html',
  styleUrls: ['./player-sticker.component.scss']
})
export class PlayerStickerComponent implements OnInit {

  @Input() player! : Player; 

  constructor(
    private router: Router, 
    private dataGlobal: DataGlobalService
  ) { }

  ngOnInit(): void {
  }

  // Redirection vers la page de détails du joueur
  redirectToDetails() : void {
    this.dataGlobal.player = this.player;
    this.router.navigate(['/Details']);
  }

}
