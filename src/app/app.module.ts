import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PokemonPageComponent } from './component/pokemon-page/pokemon-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LocationComponent } from './component/location/location.component';
import { PokemonService } from './services/pokemon.service';
import { FanartComponent } from './component/fanart/fanart.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PokemonPageComponent,
    MainPageComponent,
    LocationComponent,
    FanartComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
