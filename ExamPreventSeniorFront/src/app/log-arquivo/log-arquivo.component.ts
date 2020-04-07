import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

declare var $: any
declare var showMessage: any
declare var showErrorMessage: any

@Component({
  selector: 'app-log-arquivo',
  templateUrl: './log-arquivo.component.html',
  styleUrls: ['./log-arquivo.component.css']
})
export class LogArquivoComponent implements OnInit {

  constructor(private logService: LogService) {

  }

  public send() {
    if ($('input[type=file]')[0].files.length == 0) {
        showErrorMessage('Favor informar arquivo.');
        return;      
    }

    let file = $('input[type=file]')[0].files[0];

		this.logService.addLogs(file).subscribe(
		data => {
      showMessage('Arquivo enviado com sucesso.');   
    }
		, error => {
			showErrorMessage(error.status + ' - ' + error.message);
		});


  }

  ngOnInit() {
	$(".custom-file-input").on("change", function() {
	  var fileName = $(this).val().toString();
	  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
	});
  }

}
