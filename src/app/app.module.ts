import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from './Services/http-service.service';
import { CategoryNewsComponent } from './Components/category-news/category-news.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoryNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [NavbarComponent, HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
