import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/main-page/map/map.component';
import { CellComponent } from './components/main-page/map/cell/cell.component';
import { FieldComponent } from './components/main-page/map/field/field.component';
import { PlayerFieldComponent } from './components/main-page/map/player-field/player-field.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'mainPage',
    component: MainPageComponent,
  },
  { path: '',
    redirectTo: '/mainPage',
    pathMatch: 'full'
  },
  { path: '**', component: MainPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CellComponent,
    FieldComponent,
    PlayerFieldComponent,
    HeaderComponent,
    SideMenuComponent,
    MainMenuComponent,
    MainPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
