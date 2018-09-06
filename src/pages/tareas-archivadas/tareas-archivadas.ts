import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';

/**
 * Generated class for the TareasArchivadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tareas-archivadas',
  templateUrl: 'tareas-archivadas.html',
})
export class TareasArchivadasPage {
  archivadas=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private tarea_serv:TareaProvider) {
    this.archivadas = tarea_serv.obtenerArchivadas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareasArchivadasPage');
    this.archivadas = this.tarea_serv.obtenerArchivadas();
  }

}
