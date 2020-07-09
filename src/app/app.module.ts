import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from "@clr/angular";

import { Routes, RouterModule } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path : 'usertable' ,  component : UserTableComponent },
  {path :'' , redirectTo : '/usertable' ,  pathMatch: 'full' },
  { path: 'usertodos', component: UserDetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule,
    ClarityModule,
    HttpClientModule,
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
