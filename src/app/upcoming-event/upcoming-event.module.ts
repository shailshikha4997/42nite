import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  {path:'',component:UpcomingEventComponent }
]


@NgModule({
  declarations: [
    UpcomingEventComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class UpcomingEventModule { }
