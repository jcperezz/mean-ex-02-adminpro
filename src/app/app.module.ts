import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { APP_ROUTES } from './app.routes';
import { RegisterComponent } from './login/register/register.component';
import { PagesModule } from './pages/pages.module';
import { SettingsService } from './services/settings/settings.service';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public settings: SettingsService){ }
}
