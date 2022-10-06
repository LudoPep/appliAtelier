import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Player } from './player';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  

  constructor(
    private _http: HttpClient
    ) { }

  // Récupération de la liste de joueurs dans le json
  public getPlayers = (): Observable<Player[]> => {
    return this._http.get<Player[]>('https://data.latelier.co/training/tennis_stats/headtohead.json')
    .pipe(
      tap(
        (responseHttp) => {
          console.log('Le service renvoie ', responseHttp);
        }
      )
    )
  }
}
