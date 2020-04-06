import { Component, OnInit } from '@angular/core';

declare var $: any
declare var validateDateTime: any
declare var validateIfIsEmpty: any
declare var validateIfIsNumber: any

@Component({
  selector: 'app-log-manual',
  templateUrl: './log-manual.component.html',
  styleUrls: ['./log-manual.component.css']
})
export class LogManualComponent implements OnInit {

  public ip: String = "";
  public date: String = "";  	
  public request: String = "";
  public status: String = "";
  public userAgent: String = "";

  constructor() { }

  ngOnInit() {
  }
  
  save() {
  	 $("#ip").removeClass("is-invalid");
	 $("#request").removeClass("is-invalid");
	 $("#status").removeClass("is-invalid");
	 $("#date").removeClass("is-invalid");
	 $("#userAgent").removeClass("is-invalid");
  
  	 if (validateIfIsEmpty(this.ip)) {
	  	 $("#ip").addClass("is-invalid");
	 }

  	 if (validateIfIsEmpty(this.request)) {
	  	 $("#request").addClass("is-invalid");
	 }

  	 if (validateIfIsEmpty(this.status)) {
	  	 $("#status").addClass("is-invalid");
	 } else {
	  	 if (!validateIfIsNumber(this.status)) {
		  	 $("#status").addClass("is-invalid");
		 } 
	 }

  	 if (validateIfIsEmpty(this.date)) {
	  	 $("#date").addClass("is-invalid");
	 } else {
	  	 if (!validateDateTime(this.date)) {
		  	 $("#date").addClass("is-invalid");
		 } 
	 }
	 
	 if (validateIfIsEmpty(this.userAgent)) {
	  	 $("#userAgent").addClass("is-invalid");
	 }
	

	  
  }	
  
  onClick() {
  	$("#myModal").modal(); 
  }

}
