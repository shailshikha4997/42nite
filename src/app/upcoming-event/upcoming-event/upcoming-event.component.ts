import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpcomingEvent , Event} from 'src/app/models/interfaces/UpcomingEvents.interface';
import { UpcomingEventService } from '../upcoming-event.service';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css'],
})
export class UpcomingEventComponent implements OnInit {
  constructor(private upcomingEvent: UpcomingEventService, private router:Router) {}
  img: Event[]=[];  
  len!: number;


  ngOnInit(): void {
  this.upcomingEvents();
  }

  upcomingEvents() {
    this.upcomingEvent.getUpcomingEvents().subscribe((data:UpcomingEvent) => {
       this.len = data.data.length
      console.log(this.len)
      if(data.data.length > 0){
      data.data.forEach((element: Event) => {
       this.img.push(element)
      });
      }
    });
  }

  eventDetail(){
    this.router.navigate(['/event-detail'])
  }

  
}
