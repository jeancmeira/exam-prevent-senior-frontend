import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Log} from './log';
import {LogAggregation} from './log-aggregation';
import {Result} from './result';

declare var $: any

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  public search(ip: string, startDate: Date, endDate: Date, page: number):Observable<Result<Log>>  {
    const ret = new Observable<Result<Log>>((observer) => {

      let result = new Result<Log>();

      const list = new Array<Log>();
      result.records = list;
      result.totalPages = 1;

      const log = new Log();
      log.id = 1;
      log.ip = '127.10.10.3';
      log.request = 'request xxx';
      log.status = 200;
      log.userAgent = 'userAgent yyy';
      log.date = new Date();
      list.push(log);

      observer.next(result);
      observer.complete();


      return {
        unsubscribe() {

        }
      };
    });

    return ret;
  }

  public listAll(page: number):Observable<Result<Log>>  {
    const ret = new Observable<Result<Log>>((observer) => {

      let result = new Result<Log>();

      const list = new Array<Log>();
      result.records = list;
      result.totalPages = 1;

      const log = new Log();
      log.id = 1;
      log.ip = '127.10.10.3';
      log.request = 'request xxx';
      log.status = 200;
      log.userAgent = 'userAgent yyy';
      log.date = new Date();
      list.push(log);

      observer.next(result);
      observer.complete();


      return {
        unsubscribe() {

        }
      };
    });

    return ret;
  }

  public listAllAggregation(page: number):Observable<Result<LogAggregation>>  {
    const ret = new Observable<Result<LogAggregation>>((observer) => {

      let result = new Result<LogAggregation>();

      const list = new Array<LogAggregation>();
      result.records = list;
      result.totalPages = 1;

      const logAggregation = new LogAggregation();
      logAggregation.ip = '127.10.10.3';
      logAggregation.userAgent = 'userAgent yyy';
      logAggregation.hour = 10;
      logAggregation.total = 100;
      
      list.push(logAggregation);

      observer.next(result);
      observer.complete();


      return {
        unsubscribe() {

        }
      };
    });

    return ret;
  }

  public addLogs(file: any):Observable<boolean> {
    var formData = new FormData();
    formData.append('file', file);

    /*
     this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    */

    const ret = new Observable<boolean>((observer) => {

      observer.next(true);

      return {
        unsubscribe() {

        }
      };
    });

    return ret;

    
  }


 
}
