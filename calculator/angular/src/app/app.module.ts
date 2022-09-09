import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NumpadComponent } from './components/numpad/numpad.component';
import { ScreenComponent } from './components/screen/screen.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [AppComponent, ThemeSwitcherComponent, ScreenComponent, NumpadComponent],
  imports: [BrowserModule, StoreModule.forRoot(reducers, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
