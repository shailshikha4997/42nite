import { Component, OnInit } from '@angular/core';
import { EventDetailService } from '../event-detail.service';

export interface Employee {
  Id : number,	
  FirstName:string,	
  LastName:string,	

}
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})



export class EventDetailComponent implements OnInit {
  
  EmpData : Employee[] =[{
    "Id": 1,
    "FirstName": "",
    "LastName": ""

  }, {
    "Id": 2,
    "FirstName": "",
    "LastName": ""
  }]
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName'];
  constructor(private DetailService: EventDetailService) {}

  ngOnInit(): void {
    this.getEventDetail();
  }

  getEventDetail() {
    this.DetailService.eventDetail(803, 763.403).subscribe((response: any) => {
      console.log(response);
    });
  }
}
