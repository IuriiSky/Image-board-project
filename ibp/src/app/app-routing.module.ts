import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './header/boards/boards.component';
import { HomeComponent } from './header/home/home.component';
import { RulesComponent } from './footer/rules/rules.component';
import { ContactsComponent } from './footer/contacts/contacts.component';
import { AboutComponent } from './footer/about/about.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'boards', component: BoardsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
