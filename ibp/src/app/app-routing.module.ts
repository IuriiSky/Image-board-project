import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './header/boards/boards.component';
import { HomeComponent } from './header/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'boards', component: BoardsComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
