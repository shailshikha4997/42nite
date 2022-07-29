import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {
  API_URL= environment.base_URL
  constructor(private http: HttpClient) { }

  eventDetail(id:any,random:any): Observable<any>{
    return this.http.post(this.API_URL + 'geteventdetail?id=803&random=763.403',{id,random})
  }

  // eventDetail(id:any,random:any){
  //   let queryParams = new HttpParams();
  //   queryParams = queryParams.append('id',id);
  //   queryParams = queryParams.append('random',random);
  //   return this.http.post(this.API_URL + 'geteventdetail',{params:queryParams});
  // }
}
