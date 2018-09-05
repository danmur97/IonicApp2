import { Injectable } from '@angular/core';

/*
  Generated class for the TareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaProvider {
  tareas = [];
  constructor() {
    console.log('Hello TareaProvider Provider');
  }
  obtenerTareas(){
    return this.tareas;
  }
  agregarTarea(tarea){
    this.tareas.push(tarea);
  }
  archivarTarea(){

  }
  editarTarea(){

  }
}
