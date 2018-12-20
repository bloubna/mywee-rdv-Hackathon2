import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../common/calendar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: any;
  dates: any[] = [];
  page = 1;
  model: any;
  heure: string;

  objetTest = [];

  constructor(private service: CalendarService, private modalService: NgbModal) { }

  
  ngOnInit() {

    this.dates = this.service.dates;

    this.dates.map(x => {
      this.objetTest.push({date: x, event: []});
    });
    console.log(this.objetTest);

    this.service.readAll().subscribe(x => {
      this.events = x;
      this.objetTest.map(obj => {
        this.events.map(event => {
          if (new Date(event.start.dateTime).toString().slice(0, 10) === obj.date.toString().slice(0, 10)) {
            obj.event.push(event);
          } else {
            console.log(new Date(event.start.dateTime).toString().slice(0, 10) + ' et date = ' + obj.date.toString().slice(0, 10));
          }
        });
      });
      console.log(this.objetTest);
    });
}
openLg(content) {
  this.modalService.open(content, { size: 'lg' });
}

}
