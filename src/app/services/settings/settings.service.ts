import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private userSettings: UserSettings = {
    theme: {
      name: 'default-dark'
    }
  };

  constructor(@Inject(DOCUMENT) private _document: any) {
    this.applyTheme(this.load().theme.name);
  }

  public load(): UserSettings {
    const settings = localStorage.getItem('user-settings');

    if (settings){
      return JSON.parse(settings);
    } else {
      this.save(this.userSettings);
      return this.userSettings;
    }
  }

  save(userSettings: UserSettings): void {
    localStorage.setItem('user-settings', JSON.stringify(userSettings));
  }

  applyTheme(themeName: string): void {
    const url = `assets/css/colors/${ themeName }.css`;
    this._document.getElementById('theme-link').setAttribute('href', url);

    this.userSettings.theme.name = themeName;
    this.save(this.userSettings);
  }

}

interface UserTheme {
  name: string;
}

interface UserSettings {
  theme: UserTheme;
}
