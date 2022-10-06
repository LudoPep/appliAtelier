import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './root/home/body/body.component';
import { PlayersModule } from './root/players/players.module';
import { CardComponent } from './root/detail/card/card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayersModule,
    FormsModule
  ],
  exports: [
    BodyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
