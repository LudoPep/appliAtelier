import { Injectable } from '@angular/core';
import { Player } from './root/players/player';

@Injectable({
  providedIn: 'root'
})
export class DataGlobalService {

  constructor() { }

  public player!: Player;
  public playersResult!: Player[];
  public weight!: number;


}
