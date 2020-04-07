import { Component, OnInit } from '@angular/core';
import { LogService } from '../service/log.service';
import { LogAggregation } from '../model/log-aggregation';

declare var showErrorMessage: any;
declare var showWaitingMessage: any;
declare var closeWaitingMessage: any;


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


  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.doSearch();
    }
   }

   previousPage() {
    if (this.page > 1) {
      this.page--;
      this.doSearch();
    }
   }

   private doSearch() {
     showWaitingMessage();

     this.records = [];

     this.logService.listAllAggregation(this.page).subscribe(
      data => {
        closeWaitingMessage();
        this.records = data.records;
        this.totalPages = data.totalPages;
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


}
