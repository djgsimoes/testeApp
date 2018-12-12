import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdiconarTarefaPage } from './adiconar-tarefa';

@NgModule({
  declarations: [
    AdiconarTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(AdiconarTarefaPage),
  ],
})
export class AdiconarTarefaPageModule {}
