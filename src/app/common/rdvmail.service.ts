import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RdvmailService {
  bode = {
    'summary': 'Sample Event',
    'description': 'Sample description',
    'start': {
      'dateTime': '2018-12-21T09:00:00',
      'timeZone': 'GMT',
    },
    'end': {
      'dateTime': '2018-12-01T10:00:00',
      'timeZone': 'GMT',
    },
  };

  constructor(private http: HttpClient) { }

  sendMail(body) {
    return this.http.post('http://localhost:3000/contact', body);
  }
  sendM() {
    return this.http.post('https://www.googleapis.com/calendar/v3/calendars/calendarId/events', this.bode);
  }
}
