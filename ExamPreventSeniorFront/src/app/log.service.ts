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
    //return this.http.get<Result<Log>>('http://localhost:8080/log?page=' + page + '&ip=' 
      //    + ip + '&startDate=' + formatIsoDateTime(startDate)
        //  + '&endDate=' + formatIsoDateTime(endDate));
    return this.http.get<Result<Log>>('http://localhost:8080/log?page=' + page + '&ip=' 
          + ip + '&XstartDate=' + formatIsoDateTime(startDate)
          + '&endDate=' + formatIsoDateTime(endDate));

  }

  public listAll(page: number):Observable<Result<Log>>  {
     return this.http.get<Result<Log>>('http://localhost:8080/log?page=' + page);
  }

  public listAllAggregation(page: number):Observable<Result<LogAggregation>>  {
    return this.http.get<Result<LogAggregation>>('http://localhost:8080/log-aggregation?page=' + page);
  }

  public addLogs(file: any):Observable<boolean> {
    const formData = new FormData();
    formData.append('file', file); 

    return this.http.post<boolean>('http://localhost:8080/log-upload', formData);
  }

  public delete(log: Log):Observable<boolean> {
    return this.http.delete<boolean>('http://localhost:8080/log/' + log.id);
  }

  public save(log: Log):Observable<number> {
      const logData = {
          id: log.id
          ,ip: log.ip
          ,date: formatIsoDateTime(log.date)
          ,request: log.request
          ,userAgent: log.userAgent
          ,status: log.status 
      };

      return this.http.post<number>('http://localhost:8080/log', logData);
  }


 
}
