import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/common/constant/base-url';


const url = baseUrl;
@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  constructor(private http: HttpClient) {
     
   }

  getLetterPoints() : Observable<any> {
    return this.http.get(`${url}/letter/findAll`);
  }

  saveScore(data: any) : Observable<any> {
    return this.http.post(`${url}/score/save`, data);
  }

  viewTopScore() : Observable<any> {
    return this.http.get(`${url}/score/viewTopScore`);
  }

}
