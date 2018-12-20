import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  dates: any[] = [];

  constructor(private service: HttpClient) { }

  readAll(): Observable<any> {
    return this.service.get<any>('http://localhost:3000/api/calendar/events');
  }

  getDateArray(): any {

    const startDate = new Date(); //YYYY-MM-DD
    const endDate = new Date(); //YYYY-MM-DD

    endDate.setDate(endDate.getDate() + 30)


    let dt = new Date(startDate);
    while (dt <= endDate) {
      
      this.dates.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return this.dates;
  };

}
