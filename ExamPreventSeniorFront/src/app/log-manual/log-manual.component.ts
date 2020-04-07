import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Log } from '../log';


declare var $: any;
declare var validateDateTime: any;
declare var validateIfIsEmpty: any;
declare var validateIfIsNumber: any;
declare var formatDateTime: any;
declare var convertToDate: any;
declare var showErrorMessage: any;
declare var convertToIsoDate: any;
declare var showWaitingMessage: any;
declare var closeWaitingMessage: any;


@Component({
  selector: 'app-log-manual',
  templateUrl: './log-manual.component.html',
  styleUrls: ['./log-manual.component.css']
})
export class LogManualComponent implements OnInit {

  public ip = '';
  public date = '';
  public request = '';
  public status = '';
  public userAgent = '';

  public record: Log = null;
  public totalPages = 0;

  public page = 1;

  public records: Log[];


  constructor(private logService: LogService) {

  }

  ngOnInit() {
    this.listAll();
  }

  save() {
   let hasError = false;
   $('#ip').removeClass('is-invalid');
   $('#request').removeClass('is-invalid');
   $('#status').removeClass('is-invalid');
   $('#date').removeClass('is-invalid');
   $('#userAgent').removeClass('is-invalid');
   if (validateIfIsEmpty(this.ip)) {
     hasError = true;
     $('#ip').addClass('is-invalid');
    }

   if (validateIfIsEmpty(this.request)) {
     hasError = true;
     $('#request').addClass('is-invalid');
    }

   if (validateIfIsEmpty(this.status)) {
      hasError = true;
      $('#status').addClass('is-invalid');
    } else {
      if (!validateIfIsNumber(this.status)) {
        hasError = true;
        $('#status').addClass('is-invalid');
      }
    }

   if (validateIfIsEmpty(this.date)) {
      hasError = true;
      $('#date').addClass('is-invalid');
    } else {
      if (!validateDateTime(this.date)) {
        hasError = true;
        $('#date').addClass('is-invalid');
      }
    }
   if (validateIfIsEmpty(this.userAgent)) {
      hasError = true;
      $('#userAgent').addClass('is-invalid');
    }

   if (hasError === true) {
      return;
   }

   this.record.ip = this.ip;
   this.record.date = convertToDate(this.date);
   this.record.request = this.request;
   this.record.status = parseInt(this.status, 10);
   this.record.userAgent = this.userAgent;

   showWaitingMessage();

   this.logService.save(this.record).subscribe(
      () => {
        closeWaitingMessage();

        $('#myModal').modal('hide');
        this.doSearch();
      }
    , error => {
        closeWaitingMessage();

        if (error.status === 500) {
          showErrorMessage(error.error.message);
        } else {
          showErrorMessage(error.status + ' - ' + error.message);
        }

    });
  }

  add() {
   this.record = new Log();

   $('#ip').removeClass('is-invalid');
   $('#request').removeClass('is-invalid');
   $('#status').removeClass('is-invalid');
   $('#date').removeClass('is-invalid');
   $('#userAgent').removeClass('is-invalid');

   this.ip = '';
   this.date = '';
   this.request = '';
   this.status = '';
   this.userAgent = '';

   $('#myModal').modal();
  }

  update(record: Log) {
    $('#ip').removeClass('is-invalid');
    $('#request').removeClass('is-invalid');
    $('#status').removeClass('is-invalid');
    $('#date').removeClass('is-invalid');
    $('#userAgent').removeClass('is-invalid');


    this.record = record;

    this.ip = this.record.ip;
    this.date = formatDateTime(convertToIsoDate(this.record.date));
    this.request = this.record.request;
    this.status = this.record.status.toString();
    this.userAgent = this.record.userAgent;

    $('#myModal').modal();
  }

  delete(record: Log) {
    this.record = record;

    showWaitingMessage();

    this.logService.delete(this.record).subscribe(
        () => {
          closeWaitingMessage();

          $('#myModal').modal('hide');
          this.doSearch();
        }
        , error => {
          if (error.status === 500) {
            showErrorMessage(error.error.message);
          } else {
            showErrorMessage(error.status + ' - ' + error.message);
          }
    });

  }

  listAll() {
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
     this.records = [];

     showWaitingMessage();

     this.logService.listAll(this.page).subscribe(
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
