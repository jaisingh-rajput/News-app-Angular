import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  newsdata:Array<any>;
  key="d81b36c1c5084ffc8811fc75843d3320";
  Base_url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.key}`
  constructor(private http:HttpClient) {
   }

   news():Observable<any>{
     return this.http.get<any>(this.Base_url);
   }

   categoryNews(value:string):Observable<any>{
     return this.http.get<any>(`https://newsapi.org/v2/top-headlines?category=${value}&country=in&apiKey=${this.key}`);
   }
}
