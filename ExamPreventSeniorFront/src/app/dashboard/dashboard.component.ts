import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { LogAggregation } from '../log-aggregation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public totalPages = 0;

  public page = 1;

  public records: LogAggregation[];


  constructor(private logService: LogService) {

  }

  ngOnInit() {
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

		this.logService.listAllAggregation(this.page).subscribe(
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
