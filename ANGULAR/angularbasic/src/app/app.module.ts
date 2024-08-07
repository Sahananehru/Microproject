import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { CalculatorService } from './calculator.service';
import { Child1Component } from './child1/child1.component';

const ROUTES: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    Child1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers:[
    provideClientHydration(),
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
