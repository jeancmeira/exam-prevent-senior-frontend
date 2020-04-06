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
  	var hasError = false;
  
  	 $("#ip").removeClass("is-invalid");
	 $("#request").removeClass("is-invalid");
	 $("#status").removeClass("is-invalid");
	 $("#date").removeClass("is-invalid");
	 $("#userAgent").removeClass("is-invalid");
  
  	 if (validateIfIsEmpty(this.ip)) {
  	 	 hasError = true;
	  	 $("#ip").addClass("is-invalid");
	 }

  	 if (validateIfIsEmpty(this.request)) {
  	 	 hasError = true;
	  	 $("#request").addClass("is-invalid");
	 }

  	 if (validateIfIsEmpty(this.status)) {
  	 	hasError = true;
	  	 $("#status").addClass("is-invalid");
	 } else {
	  	 if (!validateIfIsNumber(this.status)) {
	  	 	 hasError = true;
		  	 $("#status").addClass("is-invalid");
		 } 
	 }

  	 if (validateIfIsEmpty(this.date)) {
  	 	 hasError = true;
	  	 $("#date").addClass("is-invalid");
	 } else {
	  	 if (!validateDateTime(this.date)) {
	  	 	 hasError = true;
		  	 $("#date").addClass("is-invalid");
		 } 
	 }
	 
	 if (validateIfIsEmpty(this.userAgent)) {
	 	 hasError = true;
	  	 $("#userAgent").addClass("is-invalid");
	 }
	
	if (hasError == true) {
		return;
	}
	
	$("#myModal").modal("hide");
	  
  }	

  add() {
	this.ip = "";
	this.date = "";  	
	this.request = "";
	this.status = "";
	this.userAgent = "";
  
  	$("#myModal").modal(); 
  }
  
  onClick() {
  	$("#myModal").modal(); 
  }

}
