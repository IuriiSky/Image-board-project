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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { BoardDetailsComponent } from './header/board-details/board-details.component';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'boards', component: BoardsComponent},
  {path: 'boards/:short_name', component: BoardDetailsComponent},
  {path: 'boards/:board_index/createpost', component: PostsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [NotauthGuard]},
  {path: 'rules', component: RulesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'me', component: CabinetComponent, canActivate: [AuthorizationGuard]},
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
