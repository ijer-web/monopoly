import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { CellComponent } from './components/map/cell/cell.component';
import { FieldComponent } from './components/field/field.component';
import { PlayerFieldComponent } from './components/player-field/player-field.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
