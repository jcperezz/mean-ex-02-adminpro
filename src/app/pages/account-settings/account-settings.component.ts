import { Component, OnInit, Inject, InjectionToken, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/services.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(public service: SettingsService) { }

  ngOnInit(): void {
    const settings = this.service.load();
    this.doCheck(settings.theme.name);
  }

  changeTheme(themeName: string, linkRef: ElementRef){
    this.service.applyTheme(themeName);
    this.doCheck(themeName);
  }

  doCheck(themeName: string){
    // Vanilla JavaScript
    const selectors: any = document.getElementsByClassName('selector');

    for (const ref of selectors) {

      if (ref.getAttribute('data-theme') === themeName){
        ref.classList.add('working');
      } else {
        ref.classList.remove('working');
      }
    }
  }

}
