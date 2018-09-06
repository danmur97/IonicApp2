import { Injectable } from '@angular/core';

/*
  Generated class for the TareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaProvider {
  tareas = [];
  archivadas = [];
  constructor() {
    console.log('Hello TareaProvider Provider');
  }
  obtenerTareas(){
    return this.tareas;
  }
  obtenerArchivadas(){
    return this.archivadas;
  }
  agregarTarea(tarea){
    this.tareas.push(tarea);
  }
  archivarTarea(indice){
    this.archivadas.push(this.tareas[indice]);
    this.tareas.splice(indice,1);
  }
  editarTarea(){

  }
}
