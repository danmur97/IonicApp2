import { Component, Input } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
  constructor(public navCtrl: NavController, private alerta:AlertController,private tarea_serv:TareaProvider) {
    this.tareas = tarea_serv.obtenerTareas();
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
}
