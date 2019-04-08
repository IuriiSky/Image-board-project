import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './header/boards/boards.component';
import { HomeComponent } from './header/home/home.component';
import { LoginComponent } from './header/login/login.component';
import { RulesComponent } from './footer/rules/rules.component';
import { ContactsComponent } from './footer/contacts/contacts.component';
import { AboutComponent } from './footer/about/about.component';
import { CabinetComponent } from './header/cabinet/cabinet.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { NotauthGuard } from './guards/notauth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'boards', component: BoardsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [NotauthGuard]},
  {path: 'rules', component: RulesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'me', component: CabinetComponent, canActivate: [AuthorizationGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
