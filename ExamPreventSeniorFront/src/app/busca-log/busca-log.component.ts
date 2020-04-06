import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Log } from '../log';


declare var validateDateTime: any
declare var validateIfIsEmpty: any
declare var $: any
declare var showErrorMessage: any

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
  	 $("#ip").removeClass("is-invalid");
  	 $("#startDate").removeClass("is-invalid");
	 $("#endDate").removeClass("is-invalid");  
	 
	 var hasError = false;
  
  	 if (validateIfIsEmpty(this.ip)) {
		   $("#ip").addClass("is-invalid");
		   hasError = true;
	 }

  	 if (validateIfIsEmpty(this.startDate)) {
		   $("#startDate").addClass("is-invalid");
		   hasError = true;
	 } else {
	  	 if (!validateDateTime(this.startDate)) {
			   $("#startDate").addClass("is-invalid");
			   hasError = true;
		 } 
	 }

	 if (validateIfIsEmpty(this.endDate)) {
		   $("#endDate").addClass("is-invalid");
		   hasError = true;
	 } else {
		 if (!validateDateTime(this.endDate)) {
			   $("#endDate").addClass("is-invalid");
			   hasError = true;
		 } 
	 } 
	
	 if (!hasError) {
		this.totalPages = 0;
		this.page = 1;
		this.doSearch();
	 }

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
			showErrorMessage(error.status + ' - ' + error.message);
		}
	);
   }
}
