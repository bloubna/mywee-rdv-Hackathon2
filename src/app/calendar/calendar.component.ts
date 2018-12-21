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
// renitialisation du tableau dates
    this.dates = this.service.dates;

    this.dates.map(x => {
      // renitialiser le tableau objetTest avec date et l'event qui correspond
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

    });
}
// fonction qui ouvre la modal chargé d'afficher le formulaire pour la prise de rendez-vous
openLg(content) {
  this.modalService.open(content, { size: 'lg' });
}

}
