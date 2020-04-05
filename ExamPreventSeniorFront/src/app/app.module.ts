import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogManualComponent } from './log-manual/log-manual.component';
import { LogArquivoComponent } from './log-arquivo/log-arquivo.component';

@NgModule({
  declarations: [
    AppComponent,
    LogManualComponent,
    LogArquivoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
