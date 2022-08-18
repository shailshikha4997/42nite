import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpcomingEvent } from '../models/interfaces/UpcomingEvents.interface';

@Injectable({
  providedIn: 'root',
})
export class UpcomingEventService {
  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) {}

  getUpcomingEvents(): Observable<any> {
    const formData = new FormData();
    formData.append('user_id', '2');
    formData.append('event_type', '1');
    console.log(formData);
    return this._http.post(this.baseUrl + 'apiv2/pro/getEvents', formData);
  }

  /**
   * Using subject
   */

  public eventSubject$ = new BehaviorSubject([]);
  

  refreshUpcomingEvent() {
    const formData = new FormData();
    formData.append('user_id', '2');
    formData.append('event_type', '1');
    this._http.post(this.baseUrl + 'apiv2/pro/getEvents', formData)
    .subscribe((data: any) => {
      console.log(data)
      if(data.data.length > 0){
        const upcomingEvents = data.data;
        this.eventSubject$.next(upcomingEvents);
      }
    })
  }


  /** Counter */

  public counterSubject$: BehaviorSubject<number> = new BehaviorSubject(0);

  incerementNumber() {
  let current = 0;
   this.counterSubject$.subscribe(number => {
    current = number
   })
   const incrementedNumber = current + 1
   this.counterSubject$.next(incrementedNumber)
  }

  decrementtNumber() {
    let current = 0;
     this.counterSubject$.subscribe(number => {
      current = number
     })
     const incrementedNumber = current - 1
     this.counterSubject$.next(incrementedNumber)
    }
}


