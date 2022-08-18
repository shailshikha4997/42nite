import { Component, OnInit } from '@angular/core';
import { UpcomingEventService } from 'src/app/upcoming-event/upcoming-event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private counterService: UpcomingEventService
  ) { }

  counter = 0

  ngOnInit(): void {
    this.counterService.counterSubject$.subscribe(num => {
      this.counter = num
    })
  }

}
