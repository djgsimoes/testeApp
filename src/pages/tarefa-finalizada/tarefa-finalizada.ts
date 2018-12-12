import { Tarefas } from './../../models/tarefas';
import { TarefasProvider } from './../../providers/tarefas/tarefas';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tarefa-finalizada',
  templateUrl: 'tarefa-finalizada.html',
})
export class TarefaFinalizadaPage {

  tarefas: Observable<Tarefas[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private tarefasProvider: TarefasProvider) {
  }

  excluir(id: string) {
    this.tarefasProvider.excluir(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarefaFinalizadaPage');
  }

}
