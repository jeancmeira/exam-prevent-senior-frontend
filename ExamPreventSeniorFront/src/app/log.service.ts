import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Log} from './log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  public search(ip: string, startDate: Date, endDate: Date):Observable<Log[]>  {
    const result = new Observable<Log[]>((observer) => {
      const list = new Array<Log>();

      const log = new Log();
      log.id = 1;
      log.request = 'request xxx';
      log.status = 200;
      log.userAgent = 'userAgent yyy';
      log.date = new Date();
      list.push(log);

      observer.next(list);
      observer.complete();


      return {
        unsubscribe() {

        }
      };
    });

    return result;
  }


 
}
