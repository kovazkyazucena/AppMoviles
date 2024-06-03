import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

// crear nuevo listado

// componentes:  any [] = [];
componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'accessibility-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'apps-outline',
      name: 'Date Time',
      redirectTo: '/datetime'
      },
    {
      icon: 'alert-outline',
      name: 'Input',
      redirectTo: '/input'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
