import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {
  API_URL= environment.base_URL
  constructor(private http: HttpClient) { }

  oldParams = {
    id:'',
    random:''
  }

  eventDetail(id:any,random:any){
    let queryParams = new HttpParams();
    queryParams = queryParams.set('id',id);
    queryParams = queryParams.set('random',random);
    console.log("queryParams",queryParams)
    // return this.http.post(this.API_URL + 'geteventdetail?id='+id +'&random='+random ,'');
    return this.http.post(`${this.API_URL}geteventdetail?id=${id}&random=${random}`,'');
    // return this.http.post(this.API_URL + 'geteventdetail',  queryParams)
  }


  formDataSubjext = new BehaviorSubject({
    personal_detail: {},
    exp: {},
    techStack: {},
    xyz: {}
  })

  setDetails(detail: any) {
    let allData: any = {};
    this.formDataSubjext.subscribe(data => {
      allData = data
    });
    this.formDataSubjext.next({
      ...allData,
      personal_detail: detail
    })
  }
}
