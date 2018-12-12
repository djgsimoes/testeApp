import { Tarefas } from './../../models/tarefas';
import { TarefasProvider } from './../../providers/tarefas/tarefas';
import { AdiconarTarefaPage } from './../adiconar-tarefa/adiconar-tarefa';
import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tarefas: Observable<Tarefas[]>;

  constructor(public navCtrl: NavController,
              private auth: AuthProvider,
              private tarefasProvider: TarefasProvider) {

  }

  adicionar() {
    this.navCtrl.push(AdiconarTarefaPage);
  }

  finalizar(tarefa: Tarefas) {
    tarefa.finalizada = true;
    this.tarefasProvider.atualizar(tarefa.id, tarefa);
  }

  excluir(id: string) {
    this.tarefasProvider.excluir(id);
  }

  sair() {
    this.auth.logout().then(value => {
      this.navCtrl.setRoot(LoginPage);
    })
  }

  ionViewDidLoad() {
    this.tarefas = this.tarefasProvider.pegarTarefas(false);
  }
}
