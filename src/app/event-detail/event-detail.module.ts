import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';
import {NgMaterialModule} from '../ng-material/ng-material.module'
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'',component: EventDetailComponent}
]

@NgModule({
  declarations: [
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class EventDetailModule { }
