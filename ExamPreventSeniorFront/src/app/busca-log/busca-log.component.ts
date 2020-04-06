import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Log } from '../log';
import { Result } from '../result';

declare var validateDateTime: any
declare var validateIfIsEmpty: any
declare var $: any

@Component({
  selector: 'app-busca-log',
  templateUrl: './busca-log.component.html',
  styleUrls: ['./busca-log.component.css']
})
export class BuscaLogComponent implements OnInit {

  public ip = '';
  public startDate = '';
  public endDate = '';

  public totalPages = 0;

  public page = 1;

  public records: Log[];

  constructor(private logService: LogService) {

  }

  ngOnInit() {
  }

  search() {
	/*
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
	 */
	
	 this.totalPages = 0;
	 this.page = 1;
	 this.doSearch();

  }

   previousPage(){
	if (this.page < this.totalPages) {
		this.page++;
		this.doSearch();
	}
   }

   nextPage() {
	if (this.page > 1) {
		this.page--;
		this.doSearch();
	}
   }

   private doSearch() {
		this.records = [];

		this.logService.search('', new Date(), new Date(), this.page).subscribe(
		data => {
		this.records = data.records;
		this.totalPages = data.totalPages;
		}
		, error => {
		alert(error.status + ' - ' + error.message);
		}
	);
   }
}
