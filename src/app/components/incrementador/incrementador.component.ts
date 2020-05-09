import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress')
  txtProgress: ElementRef;

  @Input()
  progreso: number;
  @Input()
  leyenda: string;

  @Output()
  cambioEvento: EventEmitter<number> = new EventEmitter();


  constructor() {
    this.leyenda = 'leyenda';
  }


  ngOnInit(): void { }

  onChange( newValue: number ){
    if (newValue == null){
      this.progreso = 0;
    } else if ( newValue > 100 ){
      this.progreso = 100;
    } else if ( newValue < 0 ){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioEvento.emit(this.progreso);
  }

  cambiarValor( valor: number){

    if ( this.progreso >= 100 && valor > 0 ) {
      this.cambioEvento.emit(this.progreso);
      return;
    }

    if ( this.progreso <= 0 && valor < 0  ) {
      this.cambioEvento.emit(this.progreso);
      return;
    }

    this.progreso += valor;
    this.cambioEvento.emit(this.progreso);
  }

}
