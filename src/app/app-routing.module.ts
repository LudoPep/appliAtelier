import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './root/detail/card/card.component';
import { BodyComponent } from './root/home/body/body.component';

const routes: Routes = [
  { path: 'Home', component: BodyComponent, pathMatch: 'full'},
  { path: 'Details', component: CardComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
