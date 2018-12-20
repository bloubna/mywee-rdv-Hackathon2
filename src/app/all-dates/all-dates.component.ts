import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../common/calendar.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all-dates',
  templateUrl: './all-dates.component.html',
  styleUrls: ['./all-dates.component.css']
})
export class AllDatesComponent implements OnInit {

  events: any;
  dates: any[] = [];
  page = 1;

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
                start: event.start.date ? 'disponible' : event.start.dateTime.slice(11, 16),
                end: event.end.date ? 'indéfini' : event.end.dateTime.slice(11, 16)
              };
            });
          })
        )
        .subscribe(res => {
          this.events = res;
        });

      this.dates = this.service.getDateArray();

    }
  }
