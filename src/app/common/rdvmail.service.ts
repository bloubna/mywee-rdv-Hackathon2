import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RdvmailService {

  constructor(private http: HttpClient) { }

  sendMail(body){
    return this.http.post('http://localhost:3000/contact', body);
  }
}
