import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  dates: any[] = [];

  constructor(private service: HttpClient) {
    this.getDateArray();
   }

   // retourn la list des events depuis l'api google
  readAll(): Observable<any> {
    return this.service.get<any>('http://localhost:3000/api/calendar/events');
  }
// fonction remplit le tableau dates avec les date d'aujourd'hui jusqu'a 30 jours aprés.

  getDateArray(): any {

    const startDate = new Date(); // YYYY-MM-DD date d'aujourd'hui
    const endDate = new Date(); // YYYY-MM-DD date de fin = date d'aujourd'hui + 30

    endDate.setDate(endDate.getDate() + 30);


    const dt = new Date(startDate);
    while (dt <= endDate) {
// chaque itération en ajout un jour à partir de notre date de debart
      this.dates.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
      }
    }
  }


