import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './component/pokemon-page/pokemon-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './component/login/login.component';
import { LocationComponent } from './component/location/location.component';

const routes: Routes = [
  { path: "", redirectTo: "/main", pathMatch: "full" },
  { path: "main", component: MainPageComponent },
  { path: 'pokemon-page', component: PokemonPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'location', component: LocationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
