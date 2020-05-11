import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy { //

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // Acá puede llamar cosas al cerror la pagina, por ejemplo
    // subscriber.unsubscribe(); Quitar las subscripcion a un observer
  }


  ejemploBasico() {
    const observable = this.newMethod();

    const subscriber = observable.pipe(
      retry(2)
    ).subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador terminó!')
    );

    subscriber.unsubscribe();
  }


  private newMethod(): Observable<number> {
    return new Observable((observer: Subscriber<number>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        observer.next(contador);
        if (contador === 3) {
          observer.complete();
        }
        if (contador === 2) {
          observer.error('Auxilio!');
        }
      });
    })
    .pipe(
      map(resp => resp + 1 ), // si necesitamos transformar la data en el observer usar map
      filter( (value, index) => { // Filtra los valores
        if (value % 2 === 1){
          return true;
        } else {
          return false;
        }
      })

    );
  }
}
