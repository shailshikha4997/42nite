import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
}
