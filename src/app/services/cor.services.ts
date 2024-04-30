import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput, catchError, retry, throwError } from 'rxjs';
import { Cor } from '../models/cor';

@Injectable({
  providedIn: 'root'
})
export class CorService {

 constructor(private http: HttpClient) {  }
 apiUrl = "http://localhost:8080";


 getAllCor(): Observable<Cor[]> {
   return this.http.get<Cor[]>(`${this.apiUrl}/cor`);
 }

 
  }


