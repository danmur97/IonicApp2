import { Component, Input } from '@angular/core';
import { NavController,AlertController, reorderArray,ToastController } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
  ordenHabilitado = false;
  constructor(public navCtrl: NavController, private alerta:AlertController,private tarea_serv:TareaProvider,
    private toast:ToastController) {
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
  editarTarea(indice){
    let alert2 = this.alerta.create({
      title: "Editar tarea",
      inputs:[{name: "tarea_txt",type: "text",value: this.tareas[indice]}],
      buttons:[
        {text:"Cancelar"},
        {text: "Modificar", 
          handler: (datos)=>{
            this.tarea_serv.editarTarea(indice,datos.tarea_txt);
          }
        }
      ]
    });
    alert2.present();
  }
  archivarTarea(indice){
    this.tarea_serv.archivarTarea(indice);
  }
}
