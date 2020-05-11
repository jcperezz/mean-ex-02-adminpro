import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [{
    name: 'Principal',
    icon: 'mdi mdi-gauge',
    submenu: [
      {name: 'Dashboard', ref: '/dashboard'},
      {name: 'Progress', ref: '/progress'},
      {name: 'Graficas', ref: '/graficas1'},
      {name: 'Promesas', ref: '/promesas'},
      {name: 'RxJs', ref: '/rxjs'}
    ]
  }];

  constructor() { }
}
