import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Ejemplo de promesa basico
   */
  ejemploBasico(){

    // promesa
    const promise = new Promise((resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval( () => {

        contador++;

        if (contador === 3) {
          resolve('OK!');
          // reject('Un error');
          clearInterval(intervalo);
        }

      }, 1000 );

    });

    promise.then( () => console.log('Terminó'))
    .catch( error => console.error('Error en la promesa', error));
   }

   /**
    * Ejemplo de metodo que retorna promesa
    */
  retornarPromise(): Promise<string> {

    return new Promise((resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval( () => {

        contador++;

        if (contador === 3) {
          resolve('OK!');
          // reject('Un error');
          clearInterval(intervalo);
        }

      }, 1000 );

    });
  }


}
