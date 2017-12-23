import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {

  // Injection du service HttpClient dans le constructeur.
  constructor(private http: Http) {
  }
  messages = [];
  getData() {
  return this.http.get('https://http://localhost:5555/messages')
  .subscribe( (res: Response) => { res.json(); });
  }
}
