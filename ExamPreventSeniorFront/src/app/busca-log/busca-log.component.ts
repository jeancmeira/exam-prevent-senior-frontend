import { Component, OnInit } from '@angular/core';

declare var validateDateTime: any
declare var $: any

@Component({
  selector: 'app-busca-log',
  templateUrl: './busca-log.component.html',
  styleUrls: ['./busca-log.component.css']
})
export class BuscaLogComponent implements OnInit {

  public ip: String = "";
  public startDate: String = "";  	
  public endDate: String = "";

  constructor() { }

  ngOnInit() {
  }

  search() {
  	 $("#ip").removeClass("is-invalid");
  
  	 if (validateIfIsEmpty(this.ip)) {
	  	 $("#ip").addClass("is-invalid");
	 } 
  }	
}
