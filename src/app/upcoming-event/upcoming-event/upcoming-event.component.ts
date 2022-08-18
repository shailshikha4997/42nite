import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UpcomingEvent,
  Event,
} from 'src/app/models/interfaces/UpcomingEvents.interface';
import { UpcomingEventService } from '../upcoming-event.service';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css'],
})
export class UpcomingEventComponent implements OnInit {
  constructor(
    public upcomingEvent: UpcomingEventService,
    private router: Router
  ) {}
  img: Event[] = [];
  len!: number;

  ngOnInit(): void {
    this.upcomingEvents();
    this.upcomingEvent.refreshUpcomingEvent();
  }

  upcomingEvents() {
    this.upcomingEvent.eventSubject$.subscribe((data) => {
      if (data) {
        this.img = data as Event[];
      }
    });
  }

  eventDetail(event: any) {
    console.log(event);
    this.router.navigate(['event-detail'], { queryParams: { eventId: event } });
  }
}
