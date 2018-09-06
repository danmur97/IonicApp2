import { Component, Input } from '@angular/core';
import { NavController,AlertController, reorderArray } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
  ordenHabilitado = false;
  constructor(public navCtrl: NavController, private alerta:AlertController,private tarea_serv:TareaProvider) {
    this.tareas = tarea_serv.obtenerTareas();
  }
  toogleOrdenHabilitado(){
    this.ordenHabilitado = !this.ordenHabilitado;
  }
  ordenarLista(evento){
    reorderArray(this.tareas,evento);
  }
  agregarTarea(){
    let alert = this.alerta.create({
      title: "Agregar tarea",
      inputs:[{name: "tarea_txt",type: "text"}],
      buttons:[
        {text:"Cancelar"},
        {text: "Agregar", 
          handler: (datos)=>{
            this.tarea_serv.agregarTarea(datos.tarea_txt);
            // this.tareas.push(datos.tarea_txt);
          }
        }
      ]
    });
    alert.present();
  }
  archivarTarea(indice){
    this.tarea_serv.archivarTarea(indice);
  }
}
