import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Log} from './log';
import {Result} from './result';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  public search(ip: string, startDate: Date, endDate: Date):Observable<Result<Log>>  {
    const ret = new Observable<Result<Log[]>>((observer) => {

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


 
}
