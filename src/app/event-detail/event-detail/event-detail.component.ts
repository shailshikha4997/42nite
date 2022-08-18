import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Eventdetail } from 'src/app/models/interfaces/EventDetail.interface';
import { UpcomingEventService } from 'src/app/upcoming-event/upcoming-event.service';
import { EventDetailService } from '../event-detail.service';

export interface Employee {
  Id: number;
  FirstName: string;
  LastName: string;
}
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  EmpData: Employee[] = [
    {
      Id: 1,
      FirstName: '',
      LastName: '',
    },
    {
      Id: 2,
      FirstName: '',
      LastName: '',
    },
  ];
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName'];
  event_id: any;
  max = 1000;
  min = 1;
  eventDetail: any | undefined;


  constructor(
    private DetailService: EventDetailService,
    private route: ActivatedRoute,
    public upcomingEvent: UpcomingEventService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.event_id = params['eventId'];
    });

    this.upcomingEvent.refreshUpcomingEvent();
    this.getEventSummary()
  }

  getEventSummary() {
    this.upcomingEvent.eventSubject$.subscribe((data) => {
      if (data) {
        const upcomingEvents = data;
        this.eventDetail = upcomingEvents.find(
          (event: any) => event.event_id === this.event_id
        );
      }
    });
  }

  // getEventDetail() {
  //   let id = this.event_id;
  //   console.log(id);
  //   let random = Math.floor(
  //     Math.random() * (this.max - this.min + 1) + this.min
  //   ).toFixed(3);
  //   console.log(random);
  //   this.DetailService.eventDetail(id, random).subscribe((response: any) => {
  //     console.log(response);
  //     let arr = Object.values(response);
  //     console.log(arr);
  //     arr.forEach((element: any) => {
  //       console.log(element);
  //       this.information.push(element);
  //     });
  //   });
  // }
}
