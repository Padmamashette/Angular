import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from "@clr/angular";
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
const routes = [
    { path: 'app', component: AppComponent },
    { path: 'Viewuserdetails', component: ViewuserdetailsComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            ViewuserdetailsComponent,
            PageNotFoundComponent,
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map