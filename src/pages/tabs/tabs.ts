import { AuthProvider } from './../../providers/auth/auth';
import { TarefaFinalizadaPage } from './../tarefa-finalizada/tarefa-finalizada';
import { LoginPage } from './../login/login';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TarefaFinalizadaPage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;

  constructor(public navCtrl: NavController,
              private auth: AuthProvider) {
                this.auth.user.subscribe(
                  (auth) => {
                    if (auth == null) {
                      this.navCtrl.setRoot(LoginPage);
                    }
                  });

  }
}
