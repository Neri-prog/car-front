import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput, catchError, retry, throwError } from 'rxjs';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 constructor(private http: HttpClient) {  }
 apiUrl = "http://localhost:8080";


 getCarro(id: number): Observable<Carro> {
   return this.http.get<Carro>(`${this.apiUrl}/carro/${id}`);
 }

 getAllCarros(): Observable<Carro[]> {
   return this.http.get<Carro[]>(`${this.apiUrl}/carro`);
 }

 postCarro(carro: Carro) {
   return this.http.post(`${this.apiUrl}/carro`, carro);
 }

 deleteCarro(id: number): Observable<any> {
   return this.http.delete<any>(`${this.apiUrl}/carro/${id}`);
 }

 putCarro(carro: Carro) {
  return this.http.put(`${this.apiUrl}/carro/${carro.idcarro}`, carro);
}
 
  }


