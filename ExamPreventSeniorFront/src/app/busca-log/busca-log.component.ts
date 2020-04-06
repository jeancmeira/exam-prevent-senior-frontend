import { Component, OnInit } from '@angular/core';

declare var validateDateTime: any
declare var validateIfIsEmpty: any
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
  	 $("#startDate").removeClass("is-invalid");
	 $("#endDate").removeClass("is-invalid");  	 
  
  	 if (validateIfIsEmpty(this.ip)) {
	  	 $("#ip").addClass("is-invalid");
	 }

  	 if (validateIfIsEmpty(this.startDate)) {
	  	 $("#startDate").addClass("is-invalid");
	 } else {
	  	 if (!validateDateTime(this.startDate)) {
		  	 $("#startDate").addClass("is-invalid");
		 } 
	 }

	 if (validateIfIsEmpty(this.endDate)) {
	  	 $("#endDate").addClass("is-invalid");
	 } else {
		 if (!validateDateTime(this.endDate)) {
		  	 $("#endDate").addClass("is-invalid");
		 } 
	 } 
	  
  }	
}
