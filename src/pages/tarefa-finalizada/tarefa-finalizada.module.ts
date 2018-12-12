import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefaFinalizadaPage } from './tarefa-finalizada';

@NgModule({
  declarations: [
    TarefaFinalizadaPage,
  ],
  imports: [
    IonicPageModule.forChild(TarefaFinalizadaPage),
  ],
})
export class TarefaFinalizadaPageModule {}
