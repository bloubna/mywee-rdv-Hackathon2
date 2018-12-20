import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../common/calendar.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: any;

  constructor(private service: CalendarService) { }

  ngOnInit() {

    // Calls Calendar API

    this.service.readAll()
      .pipe(
        map(res => {
          return res.map(event => {
            return {
              title: event.summary,
              date: event.start.date ? event.start.date : event.start.dateTime.slice(0, 10),
              start: event.start.date ? "disponible" : event.start.dateTime.slice(11, 16),
              end: event.end.date ? "indéfini" : event.end.dateTime.slice(11, 16)
            }
          })
        })
      )
      .subscribe(res => {
        this.events = res;
      });
  }
      
  
  // Dates
      checkDate(){
        const now = new Date();

        let weekday = new Array(7);
        weekday[0] = "Dimanche";
        weekday[1] = "Lundi";
        weekday[2] = "Mardi";
        weekday[3] = "Mercredi";
        weekday[4] = "Jeudi";
        weekday[5] = "Vendredi";
        weekday[6] = "Samedi";
            
        let date: any = now.getDate();
        let month: any = now.getMonth();
     
        // console.log(`${date} ${today}`);
        return (`${date}`);
  
      };

      checkDay(){
        const now = new Date();

        let weekday = new Array(7);
        weekday[0] = "Dimanche";
        weekday[1] = "Lundi";
        weekday[2] = "Mardi";
        weekday[3] = "Mercredi";
        weekday[4] = "Jeudi";
        weekday[5] = "Vendredi";
        weekday[6] = "Samedi";
            
        let today: any = weekday[now.getDay()];
       
     
        // console.log(`${date} ${today}`);
        return (`${today}`);
  
      };
}