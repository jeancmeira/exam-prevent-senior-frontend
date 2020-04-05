import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-arquivo',
  templateUrl: './log-arquivo.component.html',
  styleUrls: ['./log-arquivo.component.css']
})
export class LogArquivoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	$(".custom-file-input").on("change", function() {
	  var fileName = $(this).val().toString();
	  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
	});
  }

}
