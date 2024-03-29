import { Component, OnInit } from '@angular/core';
import { LogService } from '../service/log.service';

declare var $: any;
declare var showMessage: any;
declare var showErrorMessage: any;
declare var showWaitingMessage: any;
declare var closeWaitingMessage: any;


@Component({
  selector: 'app-log-arquivo',
  templateUrl: './log-arquivo.component.html',
  styleUrls: ['./log-arquivo.component.css']
})
export class LogArquivoComponent implements OnInit {

  constructor(private logService: LogService) {

  }

  public send() {
    if ($('input[type=file]')[0].files.length === 0) {
        showErrorMessage('Favor informar arquivo.');
        return;
    }

    showWaitingMessage();

    const file = $('input[type=file]')[0].files[0];

    this.logService.addLogs(file).subscribe(
      () => {
       closeWaitingMessage();

       showMessage('Arquivo enviado com sucesso.');
     }
     , error => {
        closeWaitingMessage();

        if (error.status === 500) {
          showErrorMessage(error.error.message);
        } else {
          showErrorMessage(error.status + ' - ' + error.message);
        }

    }
  );


  }

  ngOnInit() {
    $('.custom-file-input').on('change', function() {
      const fileName = $(this).val().toString();
      $(this).siblings('.custom-file-label').addClass('selected')
        .html(fileName);
      });
  }

}
