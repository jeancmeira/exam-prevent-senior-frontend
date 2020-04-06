import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Log} from './log';
import {LogAggregation} from './log-aggregation';
import {Result} from './result';
import { HttpClient } from '@angular/common/http';

declare var formatIsoDateTime: any


@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  public search(ip: string, startDate: Date, endDate: Date, page: number):Observable<Result<Log>>  {
    return this.http.get<Result<Log>>('http://localhost:8080/log?page=' + page + '&ip=' 
          + ip + '&startDate=' + formatIsoDateTime(startDate)
          + '&endDate=' + formatIsoDateTime(endDate));
  }

  public listAll(page: number):Observable<Result<Log>>  {
     return this.http.get<Result<Log>>('http://localhost:8080/log?page=' + page);
  }

  public listAllAggregation(page: number):Observable<Result<LogAggregation>>  {
    return this.http.get<Result<LogAggregation>>('http://localhost:8080/log-aggregation?page=' + page);
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

  public delete(log: Log):Observable<boolean> {
    const ret = new Observable<boolean>((observer) => {

      observer.next(true);

      return {
        unsubscribe() {

        }
      };
    });

    return ret;

    
  }

  public save(log: Log):Observable<number> {
    const ret = new Observable<number>((observer) => {

      observer.next(1);

      return {
        unsubscribe() {

        }
      };
    });

    return ret;

    
  }


 
}
