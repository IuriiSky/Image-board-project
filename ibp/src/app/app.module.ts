import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// import { Pipe, PipeTransform } from '@angular/core';
// import { Directive } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoardsComponent } from './header/boards/boards.component';
import { HomeComponent } from './header/home/home.component';
import { RulesComponent } from './footer/rules/rules.component';
import { AboutComponent } from './footer/about/about.component';
import { ContactsComponent } from './footer/contacts/contacts.component';
import { LoginComponent } from './header/login/login.component';

import { BoardsService } from './services/boards.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoardsComponent,
    HomeComponent,
    RulesComponent,
    AboutComponent,
    ContactsComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [BoardsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
