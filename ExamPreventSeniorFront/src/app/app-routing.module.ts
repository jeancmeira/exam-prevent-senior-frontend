import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LogManualComponent } from './log-manual/log-manual.component';
import { LogArquivoComponent } from './log-arquivo/log-arquivo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuscaLogComponent } from './busca-log/busca-log.component';


const routes: Routes = [
    { path: 'log-manual', component: LogManualComponent },
    { path: 'log-arquivo', component: LogArquivoComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'busca-log', component: BuscaLogComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
