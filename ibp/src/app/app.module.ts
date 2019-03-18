import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoardsComponent } from './header/boards/boards.component';
import { HomeComponent } from './header/home/home.component';
import { RulesComponent } from './footer/rules/rules.component';
import { AboutComponent } from './footer/about/about.component';
import { ContactsComponent } from './footer/contacts/contacts.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoardsComponent,
    HomeComponent,
    RulesComponent,
    AboutComponent,
    ContactsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
